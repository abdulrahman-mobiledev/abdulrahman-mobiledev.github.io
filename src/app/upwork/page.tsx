import { Hero } from "@/components/hero";
import { Bio } from "@/components/bio";
import { SelectedWorkV2 as SelectedWork } from "@/components/work-variants/v2-glyph";
import { Stack } from "@/components/stack";
import { Footer } from "@/components/footer";

export default function UpworkSafePage() {
  return (
    <main>
      <Hero />
      <Bio />
      <SelectedWork />
      <Stack />
      <Footer contact={false} />
    </main>
  );
}
