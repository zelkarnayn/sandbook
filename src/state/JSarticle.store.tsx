import create from "zustand";
import {devtools} from "zustand/middleware";

export const useArticles = create(
  devtools((set, get) => ({
    articles: [],
    loading: false,
    error: null,
    addArticles: async (title) => {
    // const formData = new FormData()
      // formData.append('title', title)
      // formData.append('text', text)
      // formData.append('author', author)
      // formData.append('category', category)
      // formData.append('image', image)
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
       
        body: title
      });
      const arts = await res.json();
      console.log(arts, "SSSS");
    },

    fetchArticles: async () => {
      set({ loading: true });

      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("failed to fetch");
        const articles = await res.json()
        set({ articles:articles, error: null });
        console.log(articles,"KAAAAAAAAA")
      } catch (error) {
        set({ error: error.message });
      } finally {
        set({ loading: false });
      }
    },
  }))
);
