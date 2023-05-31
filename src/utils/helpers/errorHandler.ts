import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export const apiErrorHandler = (error: any) => {
  const expiredTokenError = 401;

  if (error.status === expiredTokenError) {
    return redirect("/api/logout/401");
  }

  return error.message ?? "Erro! Verifique sua conexão com a internet";
};

export const serverErrorHandler = (error: any) => {
  return NextResponse.json(
    {},
    {
      status: error.response?.status,
      statusText: error.message,
    }
  );
};
