import { NextResponse } from "next/server";
import { supabase } from "../../lib/supabase";

export async function GET() {
  const { data, error } = await supabase.from("elderly_status").select("*");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  for (const elder of data) {
    const newStatus = elder.status === "Inside" ? "Outside" : "Inside";

    await supabase
      .from("elderly_status")
      .update({ status: newStatus })
      .eq("id", elder.id);
  }

  return NextResponse.json({ message: "Statuses updated" }, { status: 200 });
}
