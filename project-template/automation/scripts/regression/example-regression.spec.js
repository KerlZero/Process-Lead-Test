import { expect, test } from "@playwright/test";
import { htmlPath, readSourceFile } from "../helpers/test-utils.js";

test.describe("Regression example", () => {
  test("source page keeps required document structure", () => {
    const html = readSourceFile(htmlPath);

    expect(html).toContain("<html");
    expect(html).toContain("</html>");
  });
});

