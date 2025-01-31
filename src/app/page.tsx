'use client'
import { APP_ROUTES } from "@/constants/app-routes";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(APP_ROUTES.private.dashboard.name);
}