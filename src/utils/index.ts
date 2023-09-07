import { readFile, readFileSync } from "fs";
import yaml from "js-yaml";

export const readYaml = (filePath: string) => {
  try {
    // Đọc nội dung từ tệp YAML
    const yamlContent = readFileSync(filePath, "utf-8");

    // Chuyển đổi từ YAML sang JSON
    const jsonObject = yaml.load(yamlContent);

    // In ra đối tượng JSON
    console.log(jsonObject);

    // Bạn có thể sử dụng đối tượng JSON trong mã JavaScript của bạn
    // Ví dụ: jsonObject.someProperty
  } catch (error) {
    console.error(error);
  }
};
