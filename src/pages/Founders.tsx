import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import jobData from "@/constants/job-description.json";

const jobOpenings = jobData.positions;

const Founders = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gradient">Psykick</h1>
          <a
            href="/"
            className="mt-6 mb-16"
          >
            <Button
              variant="ghost"
              className="text-sm"
            >
              Back to Home
            </Button>
          </a>
        </div>
      </header>
      
      <main className="pt-48 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Join Our Team</h1>
          <p className="text-lg text-center mb-12">
            We're looking for passionate founders to join us in our mission to revolutionize mental health through technology.
          </p>

          <div className="space-y-8">
            {jobOpenings.map((job, idx) => (
              <div
                key={job.title}
                className="border rounded-lg shadow-sm transition-all duration-200 bg-white"
              >
                <button
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                  onClick={() => handleToggle(idx)}
                  aria-expanded={openIndex === idx}
                >
                  <span className="text-2xl font-semibold">{job.title}</span>
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-200 ${openIndex === idx ? "rotate-180" : "rotate-0"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`px-6 pb-6 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? '' : 'max-h-0 opacity-0 pointer-events-none'}`}
                  style={{ maxHeight: openIndex === idx ? '1000px' : '0', opacity: openIndex === idx ? 1 : 0 }}
                >
                  <div className="mb-2 text-sm text-gray-500 flex flex-wrap gap-4">
                    <span><strong>Location:</strong> {job.location}</span>
                    <span><strong>Commitment:</strong> {job.commitment}</span>
                  </div>
                  <p className="mb-2"><strong>About:</strong> {job.about}</p>
                  <p className="mb-2"><strong>Mission:</strong> {job.mission}</p>
                  <div className="mb-2">
                    <strong>Responsibilities:</strong>
                    <ul className="list-disc pl-6">
                      {job.responsibilities.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-2">
                    <strong>Requirements:</strong>
                    <ul className="list-disc pl-6">
                      {job.requirements.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  {job.bonus && job.bonus.length > 0 && (
                    <div className="mb-2">
                      <strong>Bonus:</strong>
                      <ul className="list-disc pl-6">
                        {job.bonus.map((item: string, i: number) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <a
                    href={`mailto:psykick.hello@gmail.com?subject=Application for ${encodeURIComponent(job.title)}&body=Hi Psykick Team,%0D%0A%0D%0AI am interested in the ${encodeURIComponent(job.title)} position. Here is a bit about me:%0D%0A%0D%0A[Please introduce yourself and attach your CV/resume here.]%0D%0A%0D%0ABest regards,%0D%0A[Your Name]`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full mt-4">Apply Now</Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Founders; 