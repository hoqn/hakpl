import Button from "@/components/ui/button";

export default function Buttons() {
  return (
    <div className="flex flex-col p-6 gap-4 items-center">
      <Button variant="accent" size="sm">
        Accent
      </Button>
      <Button variant="base" size="sm">
        Base
      </Button>
      <Button variant="outline" size="sm">
        Outline
      </Button>
      <Button variant="link" size="sm">
        Link
      </Button>
      <Button variant="ghost" size="sm">
        Ghost
      </Button>
      <Button variant="accent">Accent</Button>
      <Button variant="base">Base</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="link">Link</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="accent" size="lg">
        Accent
      </Button>
      <Button variant="base" size="lg">
        Base
      </Button>
      <Button variant="outline" size="lg">
        Outline
      </Button>
      <Button variant="link" size="lg">
        Link
      </Button>
      <Button variant="ghost" size="lg">
        Ghost
      </Button>
    </div>
  );
}
