"use server";

import fs from "fs/promises";
import path from "path";

const IMAGES_PATH = process.env.IMAGES_PATH;

async function doesDirExists(path) {
  try {
    const stat = await fs.stat(path);
    return stat.isDirectory();
  } catch (e) {
    if (e.code === "ENOENT") {
      return false;
    }
    throw e;
  }
}

export const updateProductAsync = async (id, state, formData) => {
  const data = {
    itemCode: formData.get("itemCode"),
    itemName: formData.get("itemName"),
    brand: formData.get("brand"),
    itemImage: formData.get("itemImage"),
  };

  if (data.itemImage.size === 0) {
    return {
      errors: {},
      message: "Please select an image",
      formData: {
        ...data,
      },
    };
  }

  try {
    if (!(await doesDirExists(IMAGES_PATH))) {
      await fs.mkdir(IMAGES_PATH, { recursive: true });
    }

    const fileName =
      new Date().getMilliseconds() +
      "_product_image" +
      path.extname(data.itemImage.name);
    const filePath = path.join(IMAGES_PATH, fileName);
    const buffer = Buffer.from(await data.itemImage.arrayBuffer());

    await fs.writeFile(filePath, buffer);
  } catch (e) {
    return {
      errors: {},
      message: "Failed to write file: " + e.message,
      formData: {
        ...data,
      },
    };
  }

  return {
    errors: {},
    message: null,
    formData: {
      ...data,
    },
  };
};
