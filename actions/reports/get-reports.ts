"use server";

export const getReports = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/reports/getReports`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage =
        errorData.message || "Ha ocurrido un error. Intente nuevamente.";
      return {
        statusCode: response.status,
        message: errorMessage,
      };
    }

    const resReports = await response.json();

    return {
      statusCode: response.status,
      reports: resReports,
    };
  } catch (error) {
    console.error("Error en createUser:", error);
    throw error;
  }
};
