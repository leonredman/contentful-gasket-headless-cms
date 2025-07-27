import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import ProductCard from "../components/ProductCard";

// Mock next/image to use plain img tag in tests next/image to avoid SSR-specific issues
jest.mock("next/image", () => (props) => <img {...props} alt={props.alt} />);

// Mock styled-jsx <style jsx> to suppress 'jsx' warning
jest.mock("styled-jsx/style", () => ({
  __esModule: true,
  default: () => null,
}));

// Valid mock object that simulates a real Contentful entry
const mockItem = {
  fields: {
    contentTitle: "Sample Product",
    featuredImage: {
      fields: {
        file: {
          url: "//images.ctfassets.net/sample.jpg",
          details: {
            image: {
              width: 300,
              height: 200,
            },
          },
        },
        title: "Sample Image",
      },
    },
    method: {
      nodeType: "document",
      data: {},
      content: [
        {
          nodeType: "paragraph",
          data: {},
          content: [
            {
              nodeType: "text",
              value: "Sample description",
              marks: [],
              data: {},
            },
          ],
        },
      ],
    },
    ctaText: "Learn More",
    ctaUrl: "https://example.com",
  },
};

describe("ProductCard", () => {
  it("renders the card with correct content", () => {
    render(<ProductCard multiColumnItem={mockItem} />);

    expect(screen.getByText("Sample Product")).toBeInTheDocument();
    expect(screen.getByAltText("Sample Image")).toBeInTheDocument();
    expect(screen.getByText("Sample description")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Learn More" })).toHaveAttribute(
      "href",
      "https://example.com"
    );
  });
});
