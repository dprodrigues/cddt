import { NextResponse } from 'next/server';
import { createProject, getUserProjects } from '@/lib/firebase/firestore';

async function GET(req) {
  try {
    const projects = await getUserProjects();

    return NextResponse.json({ projects });
  } catch (error) {}
}

async function POST(req) {
  const { body } = req;

  try {
    await createProject(body);

    return NextResponse.json(
      { message: 'project created with success' },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error.message },
      { status: error.status }
    );
  }
}

export { GET, POST };
