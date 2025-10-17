import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verficationEmail";
import { apiResponse } from "@/types/apiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<apiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Verification code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return { success: true, message: " Verifiaction email sent successfully" };
  } catch (error) {
    console.error("error sending verfication email", error);
    return { success: false, message: "Failed to send verifiaction email" };
  }
}
