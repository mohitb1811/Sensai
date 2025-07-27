import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoverLetterGenerator from "../_components/cover-letter-generator";
import { redirect } from "next/navigation";

export default function NewCoverLetterPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-5xl mx-auto space-y-6">
      {/* Back Link */}
      <div>
        <Link href="/ai-cover-letter">
          <Button variant="link" className="gap-2 pl-0 text-sm sm:text-base">
            <ArrowLeft className="h-4 w-4" />
            Back to Cover Letters
          </Button>
        </Link>
      </div>

      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-b from-gray-500 via-white to-gray-700">
          Create Cover Letter
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Generate a tailored cover letter for your job application
        </p>
      </div>

      {/* Generator Form */}
      <CoverLetterGenerator />
    </div>
  );
}
