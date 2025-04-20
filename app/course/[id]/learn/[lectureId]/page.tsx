"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  MessageSquare,
  Paperclip,
  PlayCircle,
  Settings,
  Share2,
  ThumbsUp,
} from "lucide-react"

export default function CourseLearnPage({
  params,
}: {
  params: { id: string; lectureId: string }
}) {
  const [activeTab, setActiveTab] = useState("content")
  const [showCaptions, setShowCaptions] = useState(true)
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0)
  const [videoQuality, setVideoQuality] = useState("720p")
  const [progress, setProgress] = useState(35)

  // Dummy course data
  const course = {
    id: Number.parseInt(params.id),
    title: "Web Development Bootcamp: Complete Guide",
    currentLecture: {
      id: Number.parseInt(params.lectureId),
      title: "Introduction to HTML Document Structure",
      duration: "14:25",
      description:
        "In this lecture, we'll learn about the basic structure of an HTML document, including doctype, html, head, and body elements. We'll also discuss the purpose of each element and how they work together to create a web page.",
      videoUrl: "https://example.com/video.mp4",
      completed: false,
      transcript: [
        { time: "00:00", text: "Hello everyone and welcome to this lecture on HTML document structure." },
        {
          time: "00:10",
          text: "HTML, which stands for HyperText Markup Language, is the standard markup language for documents designed to be displayed in a web browser.",
        },
        {
          time: "00:25",
          text: "Every HTML document has a required structure that includes the following declaration and elements: doctype, html, head, and body.",
        },
        { time: "00:40", text: "Let's start by understanding what each of these elements does." },
        {
          time: "00:55",
          text: "The DOCTYPE declaration is not an HTML tag; it is an instruction to the web browser about what version of HTML the page is written in.",
        },
        {
          time: "01:10",
          text: "The HTML element is the root element of an HTML page. All other elements are contained within this element.",
        },
        {
          time: "01:25",
          text: "The HEAD element contains meta information about the HTML document, such as its title, scripts, and style sheets.",
        },
        {
          time: "01:40",
          text: "The BODY element contains the visible content of the HTML document, including text, images, links, and other elements.",
        },
        { time: "01:55", text: "Now, let's create a basic HTML document structure together." },
        { time: "02:10", text: "First, we'll add the DOCTYPE declaration at the top of our document." },
        { time: "02:25", text: "Next, we'll add the HTML element, which will contain all other elements." },
        {
          time: "02:40",
          text: "Within the HTML element, we'll add the HEAD element, which will contain meta information about our document.",
        },
        {
          time: "02:55",
          text: "Inside the HEAD element, we'll add a TITLE element, which specifies the title of our document.",
        },
        {
          time: "03:10",
          text: "Finally, we'll add the BODY element, which will contain all the visible content of our document.",
        },
      ],
      resources: [
        { name: "HTML Document Structure Cheat Sheet", type: "pdf", size: "1.2 MB" },
        { name: "Lecture Slides", type: "pptx", size: "3.5 MB" },
        { name: "Example Code", type: "zip", size: "0.8 MB" },
      ],
      notes: [
        { id: 1, time: "00:45", text: "Remember that DOCTYPE is case-insensitive in HTML5", color: "yellow" },
        {
          id: 2,
          time: "02:10",
          text: "Important: Always include the charset meta tag for proper character encoding",
          color: "green",
        },
      ],
      questions: [
        {
          id: 1,
          user: "Michael S.",
          avatar: "/placeholder.svg?height=40&width=40",
          time: "2 days ago",
          text: "Is it necessary to include the DOCTYPE declaration in every HTML document?",
          replies: [
            {
              id: 1,
              user: "John Doe",
              avatar: "/placeholder.svg?height=40&width=40",
              time: "1 day ago",
              text: "Yes, it's important to include the DOCTYPE declaration in every HTML document. It tells the browser which version of HTML you're using, which helps the browser render the page correctly. Without it, browsers might enter 'quirks mode' which can cause rendering inconsistencies.",
              isInstructor: true,
            },
          ],
        },
        {
          id: 2,
          user: "Sarah L.",
          avatar: "/placeholder.svg?height=40&width=40",
          time: "1 week ago",
          text: "Can you explain more about the meta tags that should be included in the head section?",
          replies: [],
        },
      ],
    },
    sections: [
      {
        id: 1,
        title: "Introduction to Web Development",
        lectures: [
          { id: 1, title: "Welcome to the Course", duration: "5:30", type: "video", completed: true },
          { id: 2, title: "Course Overview", duration: "10:15", type: "video", completed: true },
          {
            id: 3,
            title: "Setting Up Your Development Environment",
            duration: "15:20",
            type: "video",
            completed: true,
          },
          { id: 4, title: "Web Development Basics", duration: "12:45", type: "video", completed: false },
          { id: 5, title: "How the Internet Works", duration: "8:30", type: "video", completed: false },
        ],
      },
      {
        id: 2,
        title: "HTML Fundamentals",
        lectures: [
          { id: 6, title: "Introduction to HTML", duration: "12:10", type: "video", completed: true },
          { id: 7, title: "HTML Document Structure", duration: "14:25", type: "video", completed: false, active: true },
          { id: 8, title: "Working with Text Elements", duration: "18:30", type: "video", completed: false },
          { id: 9, title: "HTML Lists and Tables", duration: "20:15", type: "video", completed: false },
          { id: 10, title: "HTML Forms and Inputs", duration: "25:40", type: "video", completed: false },
        ],
      },
      {
        id: 3,
        title: "CSS Styling",
        lectures: [
          { id: 11, title: "Introduction to CSS", duration: "15:20", type: "video", completed: false },
          { id: 12, title: "Selectors and Properties", duration: "18:45", type: "video", completed: false },
          { id: 13, title: "Box Model and Layout", duration: "22:30", type: "video", completed: false },
          { id: 14, title: "Flexbox and Grid", duration: "28:15", type: "video", completed: false },
          { id: 15, title: "Responsive Design", duration: "24:50", type: "video", completed: false },
        ],
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-80 border-r bg-muted/30 course-content-sidebar overflow-auto">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">Course Content</h2>
              <Button variant="ghost" size="sm" className="text-xs">
                Collapse All
              </Button>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-muted-foreground">{progress}% complete</div>
              <Progress value={progress} className="w-1/2" />
            </div>
            <Accordion type="multiple" defaultValue={["section-2"]} className="w-full">
              {course.sections.map((section) => (
                <AccordionItem key={section.id} value={`section-${section.id}`}>
                  <AccordionTrigger className="hover:no-underline py-2">
                    <div className="flex flex-1 items-center justify-between pr-2 text-sm">
                      <div className="font-medium">{section.title}</div>
                      <div className="text-xs text-muted-foreground">{section.lectures.length} lectures</div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-1">
                      {section.lectures.map((lecture) => (
                        <div
                          key={lecture.id}
                          className={`flex items-center justify-between p-2 text-sm rounded-md ${
                            lecture.active ? "bg-primary/10 text-primary" : "hover:bg-muted"
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            {lecture.completed ? (
                              <CheckCircle2 className="h-4 w-4 text-primary" />
                            ) : (
                              <PlayCircle className="h-4 w-4" />
                            )}
                            <span className="truncate">{lecture.title}</span>
                          </div>
                          <div className="text-xs text-muted-foreground">{lecture.duration}</div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 course-content-main">
          {/* Video Player */}
          <div className="relative">
            <div className="video-container bg-black">
              <img
                src="/placeholder.svg?height=480&width=854"
                alt="Video placeholder"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="h-16 w-16 text-white opacity-80" />
              </div>
            </div>
            {showCaptions && (
              <div className="absolute bottom-16 left-0 right-0 bg-black/70 text-white p-2 text-center">
                HTML, which stands for HyperText Markup Language, is the standard markup language for documents designed
                to be displayed in a web browser.
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-2 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="text-white">
                  <PlayCircle className="h-5 w-5" />
                </Button>
                <div className="text-sm">00:25 / 14:25</div>
                <Progress value={3} className="w-32" />
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white"
                  onClick={() => setShowCaptions(!showCaptions)}
                >
                  <FileText className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white">
                  <Settings className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Content Tabs */}
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold">{course.currentLecture.title}</h1>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                <TabsTrigger
                  value="content"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary bg-transparent px-4 py-2"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="transcript"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary bg-transparent px-4 py-2"
                >
                  Transcript
                </TabsTrigger>
                <TabsTrigger
                  value="resources"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary bg-transparent px-4 py-2"
                >
                  Resources
                </TabsTrigger>
                <TabsTrigger
                  value="notes"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary bg-transparent px-4 py-2"
                >
                  Notes
                </TabsTrigger>
                <TabsTrigger
                  value="questions"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary bg-transparent px-4 py-2"
                >
                  Q&A
                </TabsTrigger>
              </TabsList>

              <TabsContent value="content" className="pt-4">
                <div className="space-y-4">
                  <p>{course.currentLecture.description}</p>
                  <div className="flex items-center space-x-4">
                    <Checkbox id="mark-complete" />
                    <label htmlFor="mark-complete" className="text-sm">
                      Mark as completed
                    </label>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      Helpful
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm">
                      <BookOpen className="h-4 w-4 mr-1" />
                      Course Home
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="transcript" className="pt-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Lecture Transcript</h3>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {course.currentLecture.transcript.map((line, index) => (
                      <div key={index} className="flex hover:bg-muted p-1 rounded">
                        <div className="w-16 text-sm text-muted-foreground">{line.time}</div>
                        <div className="flex-1">{line.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="resources" className="pt-4">
                <div className="space-y-4">
                  <h3 className="font-medium">Lecture Resources</h3>
                  <div className="space-y-2">
                    {course.currentLecture.resources.map((resource, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border rounded-md hover:bg-muted"
                      >
                        <div className="flex items-center space-x-3">
                          <Paperclip className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <div className="font-medium">{resource.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {resource.type.toUpperCase()} • {resource.size}
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="notes" className="pt-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">My Notes</h3>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Export Notes
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {course.currentLecture.notes.map((note) => (
                      <div key={note.id} className="p-3 border rounded-md hover:bg-muted">
                        <div className="flex justify-between items-start">
                          <div className="text-xs text-muted-foreground">at {note.time}</div>
                          <div className="flex space-x-1">
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <Paperclip className="h-3 w-3" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <FileText className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        <p className="mt-1">{note.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Add a new note</h4>
                    <Textarea placeholder="Type your notes here..." />
                    <Button>Save Note</Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="questions" className="pt-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Questions & Answers</h3>
                    <Button>Ask a Question</Button>
                  </div>
                  <div className="space-y-4">
                    {course.currentLecture.questions.map((question) => (
                      <div key={question.id} className="border rounded-md p-4 space-y-4">
                        <div className="flex items-start space-x-3">
                          <Avatar>
                            <AvatarImage src={question.avatar || "/placeholder.svg"} alt={question.user} />
                            <AvatarFallback>{question.user.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <div className="font-medium">{question.user}</div>
                              <div className="text-xs text-muted-foreground">{question.time}</div>
                            </div>
                            <p className="mt-1">{question.text}</p>
                            <div className="flex space-x-2 mt-2">
                              <Button variant="ghost" size="sm">
                                <ThumbsUp className="h-4 w-4 mr-1" />
                                Helpful
                              </Button>
                              <Button variant="ghost" size="sm">
                                <MessageSquare className="h-4 w-4 mr-1" />
                                Reply
                              </Button>
                            </div>
                          </div>
                        </div>
                        {question.replies.length > 0 && (
                          <div className="ml-12 space-y-4">
                            {question.replies.map((reply) => (
                              <div key={reply.id} className="border-l-2 pl-4 space-y-2">
                                <div className="flex items-start space-x-3">
                                  <Avatar>
                                    <AvatarImage src={reply.avatar || "/placeholder.svg"} alt={reply.user} />
                                    <AvatarFallback>{reply.user.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <div className="flex-1">
                                    <div className="flex justify-between">
                                      <div className="flex items-center">
                                        <div className="font-medium">{reply.user}</div>
                                        {reply.isInstructor && <Badge className="ml-2">Instructor</Badge>}
                                      </div>
                                      <div className="text-xs text-muted-foreground">{reply.time}</div>
                                    </div>
                                    <p className="mt-1">{reply.text}</p>
                                    <div className="flex space-x-2 mt-2">
                                      <Button variant="ghost" size="sm">
                                        <ThumbsUp className="h-4 w-4 mr-1" />
                                        Helpful
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Ask a new question</h4>
                    <Textarea placeholder="Type your question here..." />
                    <Button>Submit Question</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
