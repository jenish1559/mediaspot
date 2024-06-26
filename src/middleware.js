import { updateSession } from "./auth";

export async function middleware(request) {
  return await updateSession(request);
}