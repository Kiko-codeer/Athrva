/**
 * v0 by Vercel.
 * @see https://v0.dev/t/10TDcrRMr5F
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <InstagramIcon className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-600 hover:text-gray-800" prefetch={false}>
              <HomeIcon className="h-6 w-6" />
              <span className="sr-only">Home</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800" prefetch={false}>
              <SearchIcon className="h-6 w-6" />
              <span className="sr-only">Search</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800" prefetch={false}>
              <PlusIcon className="h-6 w-6" />
              <span className="sr-only">Create</span>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <img
                    src="/placeholder.svg"
                    width={32}
                    height={32}
                    alt="Profile"
                    className="rounded-full"
                    style={{ aspectRatio: "32/32", objectFit: "cover" }}
                  />
                  <span className="sr-only">Profile</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="border-0 rounded-none shadow-none">
            <CardHeader className="flex flex-row items-center p-4">
              <Link href="#" className="flex items-center gap-2 text-sm font-semibold" prefetch={false}>
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                Acme Inc
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="w-8 h-8 ml-auto rounded-full">
                    <MoveHorizontalIcon className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <BookmarkIcon className="w-4 h-4 mr-2" />
                    Save
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <StarIcon className="w-4 h-4 mr-2" />
                    Add to favorites
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <FileWarningIcon className="w-4 h-4 mr-2" />
                    Report
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent className="p-0">
              <img src="/placeholder.svg" width={400} height={400} alt="Image" className="object-cover aspect-square" />
            </CardContent>
            <CardFooter className="grid gap-2 p-2 pb-4">
              <div className="flex items-center w-full">
                <Button variant="ghost" size="icon">
                  <HeartIcon className="w-4 h-4" />
                  <span className="sr-only">Like</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircleIcon className="w-4 h-4" />
                  <span className="sr-only">Comment</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <SendIcon className="w-4 h-4" />
                  <span className="sr-only">Share</span>
                </Button>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <BookmarkIcon className="w-4 h-4" />
                  <span className="sr-only">Comment</span>
                </Button>
              </div>
              <div className="px-2 text-sm w-full grid gap-1.5">
                <div>
                  <Link href="#" className="font-medium" prefetch={false}>
                    john
                  </Link>
                  Wow, this photo is absolutely stunning! 😍✨
                </div>
                <div>
                  <Link href="#" className="font-medium" prefetch={false}>
                    amelia
                  </Link>
                  This post just made my day! 😃👍
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card className="border-0 rounded-none shadow-none">
            <CardHeader className="flex flex-row items-center p-4">
              <Link href="#" className="flex items-center gap-2 text-sm font-semibold" prefetch={false}>
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                Acme Inc
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="w-8 h-8 ml-auto rounded-full">
                    <MoveHorizontalIcon className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <BookmarkIcon className="w-4 h-4 mr-2" />
                    Save
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <StarIcon className="w-4 h-4 mr-2" />
                    Add to favorites
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <FileWarningIcon className="w-4 h-4 mr-2" />
                    Report
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent className="p-0">
              <img src="/placeholder.svg" width={400} height={225} alt="Image" className="object-cover aspect-video" />
            </CardContent>
            <CardFooter className="grid gap-2 p-2 pb-4">
              <div className="flex items-center w-full">
                <Button variant="ghost" size="icon">
                  <HeartIcon className="w-4 h-4" />
                  <span className="sr-only">Like</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircleIcon className="w-4 h-4" />
                  <span className="sr-only">Comment</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <SendIcon className="w-4 h-4" />
                  <span className="sr-only">Share</span>
                </Button>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <BookmarkIcon className="w-4 h-4" />
                  <span className="sr-only">Comment</span>
                </Button>
              </div>
              <div className="px-2 text-sm w-full grid gap-1.5">
                <div>
                  <Link href="#" className="font-medium" prefetch={false}>
                    john
                  </Link>
                  Wow, this photo is absolutely stunning! 😍✨
                </div>
                <div>
                  <Link href="#" className="font-medium" prefetch={false}>
                    amelia
                  </Link>
                  This post just made my day! 😃👍
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card className="border-0 rounded-none shadow-none">
            <CardHeader className="flex flex-row items-center p-4">
              <Link href="#" className="flex items-center gap-2 text-sm font-semibold" prefetch={false}>
                <Avatar className="w-8 h-8 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                Acme Inc
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="w-8 h-8 ml-auto rounded-full">
                    <MoveHorizontalIcon className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <BookmarkIcon className="w-4 h-4 mr-2" />
                    Save
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <StarIcon className="w-4 h-4 mr-2" />
                    Add to favorites
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <FileWarningIcon className="w-4 h-4 mr-2" />
                    Report
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent className="p-0">
              <img src="/placeholder.svg" width={400} height={225} alt="Image" className="object-cover aspect-video" />
            </CardContent>
            <CardFooter className="grid gap-2 p-2 pb-4">
              <div className="flex items-center w-full">
                <Button variant="ghost" size="icon">
                  <HeartIcon className="w-4 h-4" />
                  <span className="sr-only">Like</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircleIcon className="w-4 h-4" />
                  <span className="sr-only">Comment</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <SendIcon className="w-4 h-4" />
                  <span className="sr-only">Share</span>
                </Button>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <BookmarkIcon className="w-4 h-4" />
                  <span className="sr-only">Comment</span>
                </Button>
              </div>
              <div className="px-2 text-sm w-full grid gap-1.5">
                <div>
                  <Link href="#" className="font-medium" prefetch={false}>
                    john
                  </Link>
                  Wow, this photo is absolutely stunning! 😍✨
                </div>
                <div>
                  <Link href="#" className="font-medium" prefetch={false}>
                    amelia
                  </Link>
                  This post just made my day! 😃👍
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="hidden md:block">
          <Card className="border-0 rounded-none shadow-none">
            <CardHeader className="flex flex-row items-center p-4">
              <h3 className="text-lg font-semibold">Suggested for you</h3>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid gap-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-medium">Acme Inc</div>
                    <div className="text-sm text-muted-foreground">Suggested for you</div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <PlusIcon className="w-4 h-4" />
                    <span className="sr-only">Follow</span>
                  </Button>
                </div>
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-medium">Acme Inc</div>
                    <div className="text-sm text-muted-foreground">Suggested for you</div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <PlusIcon className="w-4 h-4" />
                    <span className="sr-only">Follow</span>
                  </Button>
                </div>
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-medium">Acme Inc</div>
                    <div className="text-sm text-muted-foreground">Suggested for you</div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <PlusIcon className="w-4 h-4" />
                    <span className="sr-only">Follow</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function BookmarkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  )
}


function FileWarningIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}


function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function MoveHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}