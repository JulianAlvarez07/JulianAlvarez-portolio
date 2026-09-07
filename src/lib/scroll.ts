export const SECTION_IDS = [
  "home",
  "projects",
  "skills",
  "about",
  "contact",
] as const;

export const NAV_OFFSET = 96;

let scrollFrame = 0;
let lockedSection: (typeof SECTION_IDS)[number] | null = null;

const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

export function scrollToId(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  cancelAnimationFrame(scrollFrame);
  lockedSection = id as (typeof SECTION_IDS)[number];

  const start = window.scrollY;
  const target = Math.max(
    0,
    window.scrollY + element.getBoundingClientRect().top - NAV_OFFSET,
  );
  const distance = target - start;

  if (Math.abs(distance) < 2) {
    lockedSection = null;
    return;
  }

  const duration = Math.min(720, Math.max(380, Math.abs(distance) * 0.42));
  const startTime = performance.now();

  const apply = (progress: number) => {
    window.scrollTo(0, start + distance * easeOutCubic(progress));
  };

  apply(0.02);

  const step = (now: number) => {
    const progress = Math.min(1, (now - startTime) / duration);
    apply(progress);

    if (progress < 1) {
      scrollFrame = requestAnimationFrame(step);
      return;
    }

    lockedSection = null;
  };

  scrollFrame = requestAnimationFrame(step);
}

export function getActiveSectionId() {
  if (lockedSection) {
    return lockedSection;
  }

  const probe = window.scrollY + NAV_OFFSET + 12;
  let current: (typeof SECTION_IDS)[number] = SECTION_IDS[0];

  for (const id of SECTION_IDS) {
    const element = document.getElementById(id);
    if (!element) continue;
    const top = window.scrollY + element.getBoundingClientRect().top;
    if (top <= probe) {
      current = id;
    }
  }

  const reachedBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 8;

  if (reachedBottom) {
    return "contact";
  }

  return current;
}
