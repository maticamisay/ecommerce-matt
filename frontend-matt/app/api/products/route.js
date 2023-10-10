import { getClient } from "@/libs/apollo-server";
import { NextResponse } from "next/server";


export async function POST(request) {
  try {
    const loginData = await request.json();
    const client = getClient();
    const res = await client.mutate({
      mutation: LOGIN_USER,
      variables: {
        name: loginData.name,
        password: loginData.password,
      },
    });
    const loggedResponse = res.data.login;
    return NextResponse.json({
      ...loggedResponse,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: error.networkError?.statusCode || 500 }
    );
  }
}
