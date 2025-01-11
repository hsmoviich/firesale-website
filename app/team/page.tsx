import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { ProcessStep } from "@/components/process-step"
import { InfoCard } from "@/components/info-card"
import Image from "next/image"
import Link from "next/link"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#1d2632] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Header%20Links%20Left-b27Z1NZkLilouNW81pIqCewfTVON5r.png"
              alt="Fire Sale Properties"
              width={150}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <MainNav />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero-WGSruJg99n1NLFJPEgBGTA3do31fv3.png"
          alt="Firefighter Expert Consultant"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <div className="relative container mx-auto px-4">
            <div className="max-w-2xl p-6 rounded-lg">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                JOIN OUR TEAM OF INDEPENDANT EXPERT CONSULTANTS
              </h1>
              <p className="text-gray-200 mb-8 text-lg">
                At Fire Sale Properties, we offer a unique opportunity for retired firefighters to leverage their skills and experience in a new rewarding role. As an independent business consultant, you'll play a crucial role in helping homeowners navigate the challenges following a fire.
              </p>
              <Button 
                className="bg-[#ff6229] hover:bg-[#ff6229]/90 text-white"
                size="lg"
                asChild
              >
                <Link href="/sign-up">Join our team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Role Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            YOUR ROLE AND RESPONSIBILITIES
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-xl font-bold mb-4">CONNECTING WITH HOMEOWNERS</h3>
              <p className="text-gray-400">
                Using our extensive database of leads in your own hands to reach out to property owners who have recently experienced a fire. Inform them about how we can help them and lead the conversation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">PROPERTY EVALUATION</h3>
              <p className="text-gray-400">
                When a homeowner requests a quote, you'll conduct a thorough evaluation of their property. Your expertise will help homeowners and key factors to ensure an accurate and transparent estimate. This involves:
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ProcessStep
              number="01"
              title="Initial Evaluation"
              description="Using a high-resolution camera to record every detail of the home, inside and out."
              icon="camera"
            />
            <ProcessStep
              number="02"
              title="Documentation"
              description="Completing a detailed questionnaire to provide comprehensive information about the property."
              icon="clipboard"
            />
            <ProcessStep
              number="03"
              title="Submission"
              description="Uploading video, photos and necessary documentation to our system."
              icon="upload"
            />
          </div>
          <div className="text-center mt-12">
            <Button 
              className="bg-[#ff6229] hover:bg-[#ff6229]/90 text-white"
              size="lg"
              asChild
            >
              <Link href="/sign-up">Join our team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Earnings Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">How you can earn with us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <InfoCard
              title="Earnings & Recruitment"
              description="You earn a percentage when a homeowner accepts our offer. You also have the opportunity to recruit other firefighters to join our program, for every lead generated by a recruit, you earn a percentage."
              variant="outline"
            />
            <InfoCard
              title="Supporting Homeowners"
              description="A significant part of your role is to advocate for homeowners during the potential sale process. Your experience helps them to make the right choice. Fire Sale Properties is not affiliated with any public adjuster and we encourage them to retain their insurance claims."
              variant="primary"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <InfoCard
              title="Ideal Candidates"
              description="We are looking for self-starters who are good with people and really care about helping others. If you're a retired firefighter looking for a flexible, rewarding opportunity to continue helping homeowners, you'll be a great fit for our team!"
              variant="outline"
            />
            <InfoCard
              title="Why Join Us?"
              description="Work at your own pace and set your own schedule. You'll be able to genuinely help homeowners during challenging times while earning competitive compensation. Our team is here to help you succeed!"
              variant="primary"
            />
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Join our growing team!</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            We love what we do and we do it with passion. We value the experimentation of the message and smart incentives.
          </p>
          <Button 
            className="bg-[#ff6229] hover:bg-[#ff6229]/90 text-white"
            size="lg"
            asChild
          >
            <Link href="/sign-up">Join our team</Link>
          </Button>
          <div className="mt-16">
            <Image
              src="/team-illustration.svg"
              alt="Team Illustration"
              width={800}
              height={200}
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

