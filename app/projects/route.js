import { NextResponse } from 'next/server';
import { createNewProject, getUserProjects } from '@/lib/firebase/firestore';

async function GET() {
  try {
    const projects = await getUserProjects();

    return NextResponse.json({ projects });
  } catch (error) {}
}

async function POST(req) {
  const { body } = req;

  try {
    const projects = await createNewProject(body);

    return NextResponse.json(
      { message: 'project created with success', projects },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: error.status }
    );
  }
}

export { GET, POST };
