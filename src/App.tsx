import {
  Alert,
  AlertCircle,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from './ModernTheme/Alert';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ModernTheme/Accordion';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ModernTheme/AlertDialog';
import { Button } from './ModernTheme/Button';
import { Avatar } from './ModernTheme/Avatar';
import {
  Breadcrumb,
  BreadcrumbHead,
  BreadcrumbLink,
} from './ModernTheme/Breadcrumb';
import { Popover, PopoverContent, PopoverTrigger } from './ModernTheme/Popover';
import { useEffect, useState } from 'react';
import Calendar from './ModernTheme/Calendar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from './ModernTheme/Carousel';
import { Checkbox } from './ModernTheme/Checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ModernTheme/Dialog';
import { Label } from './ModernTheme/Label';
import { Input } from './ModernTheme/Input';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from './ModernTheme/Command';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger,
} from './ModernTheme/ContextMenu';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ModernTheme/Collapsible';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from './ModernTheme/HoverCard';
import { Skeleton } from './ModernTheme/Skeleton';
import { Progress } from './ModernTheme/Progress';
import { Tooltip, TooltipContent, TooltipTrigger } from './ModernTheme/Tooltip';
import {
  Toast,
  ToastAction,
  ToastContent,
  ToastDescription,
  ToastTitle,
  ToastTrigger,
} from './ModernTheme/Toast';
import { Toggle } from './ModernTheme/Toggle';
import { Switch } from './ModernTheme/Switch';
import { Textarea } from './ModernTheme/Textarea';
import { Slider } from './ModernTheme/Slider';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from './ModernTheme/NavigationMenu';
import { Link } from 'react-router-dom';
function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [checked, setChecked] = useState(false);
  const [openCommandDialog, setOpenCommandDialog] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [sliderVal, setSliderVal] = useState(50);

  useEffect(() => {
    const handleCtrlK = (e: KeyboardEvent) => {
      if (e.key === 'k' && e.ctrlKey) {
        setOpenCommandDialog((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleCtrlK);
    return () => {
      window.removeEventListener('keydown', handleCtrlK);
    };
  }, []);

  return (
    <div className="flex flex-col gap-30 my-30">
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Accordion</h3>
        <Accordion className="w-full">
          <AccordionItem className="border-border">
            <AccordionTrigger>
              Nulla proident cillum proident aute reprehenderit commodo est
              irure.
            </AccordionTrigger>
            <AccordionContent className="text-subtext">
              Enim sint excepteur elit cillum. In laborum pariatur consectetur
              ipsum enim labore deserunt nostrud aliqua cupidatat. Sit officia
              laborum elit fugiat non do. Esse aute qui qui ut ad fugiat in
              dolor dolor id esse. Dolor qui minim dolore elit eiusmod anim
              reprehenderit aliqua in ut ullamco cillum labore excepteur.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="border-border">
            <AccordionTrigger>
              Exercitation ipsum velit irure esse laborum exercitation
              incididunt velit deserunt et in ex.
            </AccordionTrigger>
            <AccordionContent className="text-subtext">
              Sunt eu non incididunt Lorem. Officia laborum duis duis amet aute
              ex cillum. Lorem pariatur eu tempor ut exercitation voluptate eu
              voluptate aliquip adipisicing. Lorem excepteur ex ad adipisicing
              ex adipisicing commodo nulla do do commodo cupidatat.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="border-border">
            <AccordionTrigger>
              Est do irure enim cillum irure nostrud do.
            </AccordionTrigger>
            <AccordionContent className="text-subtext">
              Minim minim dolor occaecat veniam. In non dolor cillum tempor.
              Culpa sit irure ex amet est enim. Ad duis ipsum sit ex eu ad
              officia cupidatat. Tempor velit esse excepteur consequat proident
              enim nostrud mollit culpa veniam non eu aliqua pariatur. Amet
              laboris sunt minim sunt.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Alert</h3>
        <Alert className={'mb-4'}>
          <AlertIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="4 17 10 11 4 5"></polyline>
              <line x1="12" x2="20" y1="19" y2="19"></line>
            </svg>
          </AlertIcon>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertIcon>
            <AlertCircle className="w-4" />
          </AlertIcon>
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </Alert>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Alert Dialog</h3>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Delete</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Avatar</h3>
        <Avatar
          src="https://avatars.githubusercontent.com/u/181278803?v=4&size=64"
          activity="active"
        />
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Breadcrumb</h3>
        <Breadcrumb>
          <BreadcrumbLink to={'/'}>Home</BreadcrumbLink>
          <BreadcrumbLink to={'/#'}>Components</BreadcrumbLink>
          <BreadcrumbHead>BreadCrumb</BreadcrumbHead>
        </Breadcrumb>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Buttons</h3>
        <div className="flex flex-wrap gap-10">
          <Button variant="primary">Button Texet</Button>
          <Button variant="secondary">Button Texet</Button>
          <Button variant="outline">Button Texet</Button>
          <Button variant="ghost">Button Texet</Button>
          <Button variant="link">Button Texet</Button>
          <Button disabled>Button Texet</Button>
          <Button variant="ghost" icon>
            <svg
              width="8"
              height="4"
              viewBox="0 0 8 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75078 3.90553L0.0950727 0.511126C0.0340446 0.454488 0 0.379241 0 0.300992C0 0.222744 0.0340446 0.147497 0.0950727 0.0908601L0.0992035 0.0872054C0.128789 0.0596535 0.1644 0.0377147 0.203871 0.022723C0.243343 0.0077312 0.285849 2.38419e-07 0.328804 2.38419e-07C0.371759 2.38419e-07 0.414265 0.0077312 0.453736 0.022723C0.493207 0.0377147 0.528819 0.0596535 0.558404 0.0872054L4.00069 3.28366L7.4416 0.0872054C7.47118 0.0596535 7.50679 0.0377147 7.54626 0.022723C7.58573 0.0077312 7.62824 2.38419e-07 7.6712 2.38419e-07C7.71415 2.38419e-07 7.75666 0.0077312 7.79613 0.022723C7.8356 0.0377147 7.87121 0.0596535 7.9008 0.0872054L7.90493 0.0908601C7.96596 0.147497 8 0.222744 8 0.300992C8 0.379241 7.96596 0.454488 7.90493 0.511126L4.24922 3.90553C4.21707 3.93538 4.17841 3.95915 4.13557 3.97539C4.09273 3.99163 4.04661 4 4 4C3.95339 4 3.90727 3.99163 3.86443 3.97539C3.82159 3.95915 3.78293 3.93538 3.75078 3.90553Z"
                fill="white"
              />
            </svg>
          </Button>
        </div>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Calendar</h3>
        <Calendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Carousel</h3>
        <div className="py-16">
          <Carousel autoPlay={2000} orientation="vertical">
            <CarouselContent className="h-100">
              {[0, 0, 0, 0, 0].map((_, index) => {
                return (
                  <CarouselItem className="basis-1/2" key={index}>
                    <div className="border-border h-full h3 rounded-lg flex items-center justify-center border-1">
                      {index + 1}
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
        <Carousel autoPlay={2000} orientation="horizontal">
          <CarouselContent>
            {[0, 0, 0, 0, 0].map((_, index) => {
              return (
                <CarouselItem className="basis-1/3" key={index}>
                  <div className="border-border h3 aspect-square rounded-lg flex items-center justify-center border-1">
                    {index + 1}
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Checkbox</h3>
        <div className="flex items-center gap-2">
          <Checkbox
            checked={checked}
            toggleChecked={() => {
              setChecked((prev) => !prev);
            }}
          />
          <p className="p">My checkbox</p>
        </div>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Collapsible</h3>
        <Collapsible className="w-[350px] space-y-2">
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">
              @peduarte starred 3 repositories
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-9 p-0" icon>
                () <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border border-border px-4 py-3 font-mono text-sm">
            @radix-ui/primitives
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border border-border px-4 py-3 font-mono text-sm">
              @radix-ui/colors
            </div>
            <div className="rounded-md border border-border px-4 py-3 font-mono text-sm">
              @stitches/react
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Command</h3>
        <Command className="border border-border shadow-md w-100">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No Results Found</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem disabled>
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
        <CommandDialog open={openCommandDialog} setOpen={setOpenCommandDialog}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Context Menu</h3>
        <ContextMenu>
          <ContextMenuTrigger className="w-60 aspect-square border border-border rounded-lg grid place-content-center">
            Right Click Here
          </ContextMenuTrigger>
          <ContextMenuContent>
            <Calendar
              className="w-80"
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </ContextMenuContent>
        </ContextMenu>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">DatePicker</h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="min-w-40">
              {selectedDate
                ? selectedDate.toISOString().substring(0, 10)
                : 'Pick a date'}
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <Calendar
              className="w-80"
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Dialog</h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] p-6">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" defaultValue="Rares" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  defaultValue="Rareseanu"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">HoverCard</h3>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@nextjs</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar src="https://github.com/vercel.png" />

              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">
                  The React Framework – created and maintained by @vercel.
                </p>
                <div className="flex items-center pt-2">
                  <span className="text-xs text-muted-foreground">
                    Joined December 2021
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Input</h3>
        <Input id="username" defaultValue="Rareseanu" className="col-span-3" />
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Label</h3>
        <Label htmlFor="username">Label For Input</Label>
      </div>
      <div className="w-[80%] mx-auto mb-50">
        <h3 className="h3">Navigation Menu</h3>

        <NavigationMenu>
          {/* Getting Started */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-surface   p-6 no-underline outline-none focus:shadow-md"
                    to="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="p text-subtext">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </Link>
                </li>
                <li>
                  <NavigationMenuLink to="/docs">
                    <p className="p">Introduction</p>
                    <p className="p text-subtext">
                      Re-usable components using nothing but pure React Code and
                      TailwindCSS
                    </p>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink to="/installation">
                    <p className="p">Instalation</p>
                    <p className="p text-subtext">
                      How to install dependencies and structure your app
                    </p>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink to="/typography">
                    <p className="p">Typography</p>
                    <p className="p text-subtext">
                      Styles for headings, paragraphs etc...
                    </p>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Components */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <li>
                  <Link
                    className="block p-2 rounded-md hover:bg-surface transition-colors duration-150"
                    to="/components/buttons"
                  >
                    Buttons
                  </Link>
                </li>
                <li>
                  <Link
                    className="block p-2 rounded-md hover:bg-surface transition-colors duration-150"
                    to="/components/cards"
                  >
                    Cards
                  </Link>
                </li>
                <li>
                  <Link
                    className="block p-2 rounded-md hover:bg-surface transition-colors duration-150"
                    to="/components/modals"
                  >
                    Modals
                  </Link>
                </li>
                <li>
                  <Link
                    className="block p-2 rounded-md hover:bg-surface transition-colors duration-150"
                    to="/components/tables"
                  >
                    Tables
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Resources */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[350px] gap-3 p-4">
                <li>
                  <Link
                    className="block p-2 rounded-md hover:bg-surface transition-colors duration-150"
                    to="/tutorials"
                  >
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link
                    className="block p-2 rounded-md hover:bg-surface transition-colors duration-150"
                    to="/blog"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="block p-2 rounded-md hover:bg-surface transition-colors duration-150"
                    to="/faq"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Documentation Link (Standalone) */}
          <NavigationMenuItem>
            <Link to="/docs">
              <Button variant="ghost">Documentation</Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenu>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Popover</h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open</Button>
          </PopoverTrigger>
          <PopoverContent side="bottom">Content goes here</PopoverContent>
        </Popover>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Progress</h3>
        <Progress progress={20} />
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Skeleton</h3>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px] rounded-full" />
            <Skeleton className="h-4 w-[200px] rounded-full" />
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Slider</h3>
        <Slider value={sliderVal} setValue={setSliderVal} max={100} step={1} />
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Switch</h3>
        <div className="flex gap-2 items-center">
          <Switch
            isSelected={isSelected}
            toggle={() => {
              setIsSelected((prev) => !prev);
            }}
          />
          <Label>Airplane Mode</Label>
        </div>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">TextArea</h3>
        <Textarea />
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Toast</h3>
        <Toast>
          <ToastTrigger>Plan</ToastTrigger>
          <ToastContent>
            <ToastTitle>Scheduled: Catch up </ToastTitle>
            <ToastDescription>
              Friday, February 10, 2023 at 5:57 PM
            </ToastDescription>
            <ToastAction>Undo</ToastAction>
          </ToastContent>
        </Toast>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Toggle</h3>
        <Toggle
          isSelected={isSelected}
          toggle={() => {
            setIsSelected((prev) => !prev);
          }}
        >
          A
        </Toggle>
        <Toggle
          isSelected={isSelected}
          toggle={() => {
            setIsSelected((prev) => !prev);
          }}
        >
          B
        </Toggle>
        <Toggle
          isSelected={isSelected}
          toggle={() => {
            setIsSelected((prev) => !prev);
          }}
        >
          C
        </Toggle>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Tooltip</h3>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Button</Button>
          </TooltipTrigger>
          <TooltipContent className="text-nowrap">
            Add to library
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
