import { create } from "zustand";

export type AppPageId = "about" | "projects" | "work";

interface AppPage {
  id: AppPageId;
  label: string;
  position: number;
}

const pages: ReadonlyArray<AppPage> = [
  {
    position: 1,
    id: "about",
    label: "About",
  },
  {
    position: 2,
    id: "work",
    label: "Work",
  },
  {
    position: 3,
    id: "projects",
    label: "Projects",
  },
];

interface AppStoreState {
  pages: ReadonlyArray<AppPage>;
  page: AppPage;
  setPage: (pageId: AppPageId) => void;
  previousPage: () => void;
  nextPage: () => void;
}

const useAppStore = create<AppStoreState>()((set, get) => ({
  pages,
  page: pages.find((p) => p.position === 1) ?? pages[0],
  setPage: function (pageId) {
    const page = pages.find((p) => p.id === pageId);
    set({ page });
  },
  previousPage: function () {
    const previous = get().page.position - 1;
    const page = get().pages.find((p) => p.position === previous);
    if (page) set({ page });
  },
  nextPage: function () {
    const next = get().page.position + 1;
    const page = get().pages.find((p) => p.position === next);
    if (page) set({ page });
  },
}));

export default useAppStore;
