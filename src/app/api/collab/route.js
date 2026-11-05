import { NextResponse } from "next/server";

// In serverless environments, avoid leaking private database records
export async function GET() {
  return NextResponse.json(
    {
      error: "Method Not Allowed",
      message: "Visitor submission records are private and protected.",
    },
    { status: 405 }
  );
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, contact, college, projectTitle, category, techStack, timeline, description } = body || {};

    // Strict validation
    if (!name || !name.trim()) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    if (!contact || !contact.trim()) {
      return NextResponse.json(
        { error: "Email or WhatsApp contact is required" },
        { status: 400 }
      );
    }
    if (!projectTitle || !projectTitle.trim()) {
      return NextResponse.json(
        { error: "Project title is required" },
        { status: 400 }
      );
    }
    if (!description || !description.trim()) {
      return NextResponse.json(
        { error: "Project description is required" },
        { status: 400 }
      );
    }

    const newRecord = {
      name: String(name).slice(0, 100).trim(),
      contact: String(contact).slice(0, 120).trim(),
      college: college ? String(college).slice(0, 120).trim() : "Student / Developer",
      projectTitle: String(projectTitle).slice(0, 150).trim(),
      category: category ? String(category).slice(0, 80).trim() : "Final Year Capstone",
      techStack: techStack ? String(techStack).slice(0, 200).trim() : "",
      timeline: timeline ? String(timeline).slice(0, 80).trim() : "This Semester",
      description: String(description).slice(0, 2500).trim(),
      createdAt: new Date().toISOString(),
      status: "pending_review",
    };

    // If MongoDB URI is configured, store record securely
    if (process.env.MONGODB_URI) {
      const { MongoClient } = await import("mongodb");
      const client = new MongoClient(process.env.MONGODB_URI);
      await client.connect();
      const db = client.db("portfolioblogs");
      const collection = db.collection("collaborations");
      const result = await collection.insertOne(newRecord);
      await client.close();

      return NextResponse.json(
        {
          success: true,
          message: "Collaboration proposal received and saved to database.",
          id: result.insertedId.toString(),
        },
        { status: 201 }
      );
    }

    // Graceful fallback for local development without DB
    return NextResponse.json(
      {
        success: true,
        message: "Collaboration proposal received in development mode.",
        data: {
          projectTitle: newRecord.projectTitle,
          name: newRecord.name,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Collab API error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}

