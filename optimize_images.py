import os
from PIL import Image

def optimize_image(filename, max_width=None, quality=80):
    filepath = os.path.join('assets', filename)
    if not os.path.exists(filepath):
        print(f"File not found: {filename}")
        return

    try:
        with Image.open(filepath) as img:
            # Calculate new size
            target_width = img.width
            target_height = img.height
            
            if max_width and img.width > max_width:
                ratio = max_width / img.width
                target_width = int(img.width * ratio)
                target_height = int(img.height * ratio)
                img = img.resize((target_width, target_height), Image.Resampling.LANCZOS)
            
            # Save as WebP
            new_filename = os.path.splitext(filename)[0] + '.webp'
            new_filepath = os.path.join('assets', new_filename)
            
            img.save(new_filepath, 'WEBP', quality=quality)
            
            original_size = os.path.getsize(filepath)
            new_size = os.path.getsize(new_filepath)
            reduction = (original_size - new_size) / original_size * 100
            
            print(f"Optimized {filename} -> {new_filename}")
            print(f"  Size: {original_size/1024:.2f}KB -> {new_size/1024:.2f}KB ({reduction:.1f}% reduction)")

    except Exception as e:
        print(f"Error optimizing {filename}: {e}")

# Specific optimizations based on usage in index.html and file analysis
optimize_image('avatar.jpeg', max_width=500, quality=75) # Displayed at 500x500
optimize_image('StuConnect.png', max_width=800, quality=80) 
optimize_image('Rgitx.png', max_width=800, quality=80)
optimize_image('glassy-home.png', max_width=800, quality=80)
