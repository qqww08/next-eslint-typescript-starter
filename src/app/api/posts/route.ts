import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
  return NextResponse.json({ res });
}
