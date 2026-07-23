import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import cloudinary from "@/lib/cloudinary";

interface CloudinaryUploadResult {
  secure_url: string;
  public_id: string;
  [key: string]: unknown;
}

export async function POST(request: Request) {
  const formdata = await request.formData();
  const price = Number(formdata.get("price") as string);
  const location = formdata.get("location") as string;
  const mapurl = formdata.get("mapurl") as string;
  const space = Number(formdata.get("space") as string);
  const title = formdata.get("title") as string;
  const bathrooms = Number(formdata.get("bathrooms") as string);
  const bedrooms = Number(formdata.get("bedrooms") as string);
  const kitchens = Number(formdata.get("kitchens") as string);
  const livingrooms = Number(formdata.get("livingrooms") as string);
  const floor = Number(formdata.get("floor") as string);
  const balcony = formdata.get("balcony") === "true";
  const furnished = formdata.get("furnished") === "true";
  const parking = formdata.get("parking") === "true";
  const type = formdata.get("type") as string;
  const region = formdata.get("region") as string;
  const images = formdata.getAll("images") as File[];
  const imagebuffers = await Promise.all(
    images.map(async (image) => {
      const bytes = await image.arrayBuffer();
      return Buffer.from(bytes);
    }),
  );

  const uploadimages = await Promise.all(
    imagebuffers.map((buffer) => {
      return new Promise<CloudinaryUploadResult>((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {},
          (error, result) => {
            if (error) {
              reject(error);
              return;
            }
            resolve(result as CloudinaryUploadResult);
          },
        );
        stream.end(buffer);
      });
    }),
  );

  const imageurl = uploadimages.map((image) => image.secure_url);

  const { data, error } = await supabase
    .from("apartments")
    .insert([
      {
        price,
        location,
        mapurl,
        space,
        title,
        bathrooms,
        bedrooms,
        kitchens,
        livingrooms,
        floor,
        balcony,
        furnished,
        parking,
        type,
        region,
      },
    ])
    .select()
    .single();

  if (error) {
    console.log(error);
    return NextResponse.json({ success: false, error });
  }

  // Build image rows using the newly created apartment's id
  const imagesdata = imageurl.map((url) => ({
    apartment_id: data.id,
    "image-url": url,
  }));

  const { error: imagesError } = await supabase
    .from("apartments_images")
    .insert(imagesdata);

  if (imagesError) {
    console.log(imagesError);
    return NextResponse.json({ success: false, error: imagesError });
  }

  return NextResponse.json({ success: true, data });
}

export async function GET() {
  const { data, error } = await supabase.from("apartments").select(`
      *,
    apartments_images ( "image-url" )
  `);

  if (error) {
    console.log(error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }

  return NextResponse.json({ success: true, data });
}
