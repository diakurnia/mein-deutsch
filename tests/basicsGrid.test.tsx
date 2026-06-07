import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BasicsGrid } from "@/components/BasicsGrid";
import type { BasicsGroup } from "@/content/basics-types";

const groups: BasicsGroup[] = [
  {
    caption: "Contoh",
    items: [
      { de: "Hallo", translation: "Halo" },
      { de: "Danke", translation: "Terima kasih", hint: "dang-keh" },
    ],
  },
];

describe("BasicsGrid", () => {
  it("menampilkan caption grup dan teks tiap item", () => {
    render(<BasicsGrid groups={groups} />);
    expect(screen.getByText("Contoh")).toBeInTheDocument();
    expect(screen.getByText("Hallo")).toBeInTheDocument();
    expect(screen.getByText("Terima kasih")).toBeInTheDocument();
    expect(screen.getByText("dang-keh")).toBeInTheDocument();
  });

  it("menampilkan satu tombol audio per item", () => {
    render(<BasicsGrid groups={groups} />);
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });
});
