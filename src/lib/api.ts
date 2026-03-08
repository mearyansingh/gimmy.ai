import type { UserProfile } from "../types";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

async function post(path: string, body: object) {
  const response = await fetch(`${BASE_URL}/api${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok)
    throw new Error(
      (await response.json().catch(() => ({}))).error || "Request failed",
    );

  return response.json();
}

async function get(path: string) {
  const response = await fetch(`${BASE_URL}/api${path}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export const api = {
  saveProfile: (
    userId: string,
    profile: Omit<UserProfile, "userId" | "updatedAt">,
  ) => {
    return post("/profile", { userId, ...profile });
  },

  generatePlan: (userId: string) => {
    return post("/plan/generate", { userId });
  },

  getCurrentPlan: (userId: string) => {
    return get(`/plan/current?userId=${userId}`);
  },
};
