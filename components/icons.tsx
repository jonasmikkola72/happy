import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Command,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  LucideProps,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  Twitter,
  User,
  X,
  BotIcon,
  FolderClosed,
  LayoutDashboard,
  LucideIcon,
  MessageSquare,
  Key,
  Coins,
  ArrowUp,
  CheckCheck,
} from "lucide-react"
export const dashboardConfig = {
  mainNav: [
      {
          title: "Support",
          href: "/dashboard/support",
      },
  ],
  sidebarNav: [
      {
          title: "Dashboard",
          href: "/dashboard",
          icon: "dashboard",
      },
      {
          title: "Chatbots",
          href: "/dashboard/chatbots",
          icon: "bot",
      },
      {
          title: "Crawlers",
          href: "/dashboard/crawlers",
          icon: "post",
      },
      {
          title: "Files",
          href: "/dashboard/files",
          icon: "folder",
      },
      {
          title: "Billing",
          href: "/dashboard/billing",
          icon: "billing",
      },
      {
          title: "Settings",
          href: "/dashboard/settings",
          icon: "settings",
      },
      // New Chat section
      {
          title: "Chat",
          href: "/dashboard/chat",
          icon: {
              svgPath: "M16.257 3.04c.609.042 1.147.129 1.657.34a5 5 0 0 1 2.706 2.706c.211.51.299 1.048.34 1.657.04.592.04 1.319.04 2.221v.071l-.04 2.221c-.042.609-.129 1.147-.34 1.657a5 5 0 0 1-2.706 2.706c-.51.211-1.048.299-1.657.34-.592.04-1.319.04-2.221.04l-2.841.001-.392.019a1 1 0 0 0-.468.234c-.057.051-.116.121-.391.489l-.022.029-1.483 1.916c-.371.437-.791.877-1.292 1.084A3 3 0 0 1 3.42 19.53c-.276-.466-.348-1.07-.383-1.643L3 16.107V9.665l.057-1.974c.06-.729.185-1.369.487-1.961A5 5 0 0 1 5.73 3.545c.592-.302 1.232-.428 1.961-.487.551-.045 1.202-.055 1.974-.057h5.015l1.577.04zM14.59 5H9.813l-1.959.051c-.605.049-.953.142-1.216.276a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216-.041.505-.049 1.127-.051 1.959l.001 6.483.032 1.471c.016.268.039.456.065.589.023.112.042.155.043.157a1 1 0 0 0 1.237.412c.002-.002.043-.023.129-.1.101-.09.232-.227.406-.432l1.43-1.851.043-.058c.208-.278.391-.523.617-.724a3 3 0 0 1 1.405-.703c.222-.045.449-.056.696-.058L14 15l2.121-.036c.507-.035.802-.099 1.027-.193a3 3 0 0 0 1.624-1.623c.093-.225.158-.521.193-1.027C19 11.605 19 10.946 19 10l-.036-2.121c-.035-.507-.099-.802-.193-1.027a3 3 0 0 0-1.623-1.624c-.225-.093-.521-.158-1.027-.193L14.59 5zM11 11a1 1 0 1 1 0 2h0-3a1 1 0 1 1 0-2h0zm5-4a1 1 0 1 1 0 2h0-8a1 1 0 1 1 0-2h0z",
              viewBox: "0 0 20 20", // Adjust viewBox as needed
          },
      },
  ],
};

export type Icon = LucideIcon

export const Icons = {
  logo: Command,
  folder: FolderClosed,
  dashboard: LayoutDashboard,
  close: X,
  key: Key,
  checkcheck: CheckCheck,
  coin: Coins,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  bot: BotIcon,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  arrowUp: ArrowUp,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  
  google: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
    </svg>
  ),
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  message: MessageSquare,
  twitter: Twitter,
  check: Check,
}