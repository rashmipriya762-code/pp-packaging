import os
from rembg import remove, new_session
from PIL import Image

def process_image(filepath):
    try:
        print(f"Processing {filepath}...")
        # Load the silueta model which is only 43MB
        session = new_session("silueta")
        
        with open(filepath, 'rb') as i:
            with open(filepath + ".temp.png", 'wb') as o:
                input_data = i.read()
                output_data = remove(input_data, session=session)
                o.write(output_data)
        
        # Replace the original with the transparent one
        os.replace(filepath + ".temp.png", filepath)
        print(f"Success: {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

if __name__ == "__main__":
    process_image("public/images/home-hero.png")
    process_image("public/images/home-cta.png")
