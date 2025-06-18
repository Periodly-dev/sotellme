"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Play, Pause, Volume2, Instagram, Twitter, Mail, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Component() {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#fad02c] rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">So Tell Me</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-gray-600 hover:text-[#fad02c] transition-colors">
              About
            </Link>
            <Link href="#listen" className="text-gray-600 hover:text-[#fad02c] transition-colors">
              Listen
            </Link>
            <Link href="#host" className="text-gray-600 hover:text-[#fad02c] transition-colors">
              Host
            </Link>
            <Link href="#connect" className="text-gray-600 hover:text-[#fad02c] transition-colors">
              Connect
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <div className="w-24 h-24 bg-[#fad02c] rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">So Tell Me Podcast </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">Conversations with experts who shape our world</p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Dive deep into fascinating discussions with leading experts across business, health, art, and beyond.
              Every episode brings you closer to the minds that matter.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#fad02c] hover:bg-[#e8c028] text-gray-900 font-semibold"
              onClick={() => document.getElementById("listen")?.scrollIntoView({ behavior: "smooth" })}
            >
              Listen Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#fad02c] text-[#fad02c] hover:bg-[#fad02c] hover:text-gray-900"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              About
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What is So Tell Me Podcast?{" "}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#fad02c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Conversations</h3>
                <p className="text-gray-600">
                  In-depth interviews with industry leaders, innovators, and thought leaders who are making a
                  difference.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#fad02c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Diverse Fields</h3>
                <p className="text-gray-600">
                  From business and health to art and technology, we explore expertise across all domains of human
                  knowledge.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#fad02c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Volume2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Authentic Stories</h3>
                <p className="text-gray-600">
                  Real stories, genuine insights, and practical wisdom shared in an authentic, conversational format.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Listen Section */}
      <section id="listen" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Where to Listen</h2>
          <p className="text-lg text-gray-600 mb-12">Catch every episode on your favorite platform</p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="#" className="group">
              <Card className="border-2 border-transparent group-hover:border-[#fad02c] transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Spotify</h3>
                  <p className="text-gray-600">Stream on Spotify</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="#" className="group">
              <Card className="border-2 border-transparent group-hover:border-[#fad02c] transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{"A"}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Apple Podcasts</h3>
                  <p className="text-gray-600">Listen on Apple</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="#" className="group">
              <Card className="border-2 border-transparent group-hover:border-[#fad02c] transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">▶</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">YouTube</h3>
                  <p className="text-gray-600">Watch on YouTube</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Host Section */}
      <section id="host" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Podcast Host"
                width={400}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Your Host</h2>
              <p className="text-lg text-gray-600 mb-6">
                Hi, I'm [Your Name], and I'm passionate about learning from the best minds in every field. Through So
                Tell Me, I get to sit down with incredible experts and share their wisdom with you.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                My curiosity drives every conversation, and my goal is to make complex topics accessible and engaging
                for everyone. Whether you're an entrepreneur, artist, or simply someone who loves to learn, there's
                something here for you.
              </p>
              <Button className="bg-[#fad02c] hover:bg-[#e8c028] text-gray-900 font-semibold">
                Learn More About Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Let's Connect</h2>
          <p className="text-lg text-gray-600 mb-12">Join the conversation and stay updated with the latest episodes</p>
          <div className="flex justify-center gap-6 mb-12">
            <Link href="#" className="group">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-[#fad02c] transition-colors">
                <Instagram className="w-6 h-6 text-white" />
              </div>
            </Link>
            <Link href="#" className="group">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-[#fad02c] transition-colors">
                <Twitter className="w-6 h-6 text-white" />
              </div>
            </Link>
            <Link href="#" className="group">
              <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center group-hover:bg-[#fad02c] transition-colors">
                <Mail className="w-6 h-6 text-white" />
              </div>
            </Link>
          </div>
          <div className="bg-[#fad02c] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Have a suggestion for a guest?</h3>
            <p className="text-gray-700 mb-6">
              I'm always looking for fascinating experts to interview. Send me your recommendations!
            </p>
            <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white">
              Suggest a Guest
            </Button>
          </div>
        </div>
      </section>

      {/* Audio Player - Fixed at Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-4">
            <Button
              size="sm"
              onClick={togglePlay}
              className="bg-[#fad02c] hover:bg-[#e8c028] text-gray-900 rounded-full w-10 h-10 p-0"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">Latest Episode</div>
              <div className="text-xs text-gray-600">Expert Interview Series</div>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-gray-600" />
              <div className="w-20 h-1 bg-gray-200 rounded-full">
                <div className="w-1/2 h-full bg-[#fad02c] rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <div className="w-full h-1 bg-gray-200 rounded-full">
              <div className="w-1/3 h-full bg-[#fad02c] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 mb-20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-[#fad02c] rounded-full flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold">So Tell Me Podcast </span>
          </div>
          <p className="text-gray-400 mb-4">Conversations with experts who shape our world</p>
          <p className="text-sm text-gray-500">© 2024 So Tell Me Podcast. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
