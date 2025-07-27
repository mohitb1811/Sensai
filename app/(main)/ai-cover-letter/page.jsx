import { getCoverLetters } from "@/actions/cover-letter";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoverLetterList from "./_components/cover-letter-list";

export default async function CoverLetterPage() {
  const coverLetters = await getCoverLetters();

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.2] text-transparent bg-clip-text bg-gradient-to-b from-gray-500 via-white to-gray-700">
          My Cover Letters
        </h1>
        <Link href="/ai-cover-letter/new">
          <Button className="w-full sm:w-auto justify-center">
            <Plus className="h-4 w-4 mr-2" />
            Create New
          </Button>
        </Link>
      </div>

      {/* Cover Letter List */}
      <CoverLetterList coverLetters={coverLetters} />
    </div>
  );
}
