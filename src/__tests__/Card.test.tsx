import { render, screen } from "@testing-library/react";
import { Card } from "../components/Card";

const CardMockup = () => {
  return (
    <Card
      Poster={"String"}
      Title={"Title"}
      Year={"1924"}
      Plot={"Plot"}
      Actors={"ActingGoBRRR"}
      Language={"ENGLISH"}
      Awards={"GRAMMY"}
    />
  );
};

describe("Card", () => {
  it("PlotTextCard", () => {
    render(<CardMockup />);
    const PlotText = screen.getByText(/Plot/i);
    expect(PlotText).toBeInTheDocument();
  });

  it("TitleTextCard", () => {
    render(<CardMockup />);
    const TitleText = screen.getByText(/Title/i);
    expect(TitleText).toBeInTheDocument();
  });

  it("PosterTextCard", () => {
    render(<CardMockup />);
    const PosterText = screen.getByText(/Plot/i);
    expect(PosterText).toBeInTheDocument();
  });

  it("YearTextCard", () => {
    render(<CardMockup />);
    const PlotText = screen.getByText(/Plot/i);
    expect(PlotText).toBeInTheDocument();
  });

  it("ActorsTextCard", () => {
    render(<CardMockup />);
    const ActorsText = screen.getByText(/ActingGoBRRR/i);
    expect(ActorsText).toBeInTheDocument();
  });

  it("LanguageTextCard", () => {
    render(<CardMockup />);
    const LanguageText = screen.getByText(/ENGLISH/i);
    expect(LanguageText).toBeInTheDocument();
  });

  it("AwardsTextCard", () => {
    render(<CardMockup />);
    const AwardsText = screen.getByText(/GRAMMY/i);
    expect(AwardsText).toBeInTheDocument();
  });
});
