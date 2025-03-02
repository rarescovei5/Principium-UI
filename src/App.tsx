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
import { useState } from 'react';
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
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from './ModernTheme/Command';
function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col gap-30 my-30">
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Accordion</h3>
        <Accordion className="w-full">
          <AccordionItem>
            <AccordionTrigger>
              Nulla proident cillum proident aute reprehenderit commodo est
              irure.
            </AccordionTrigger>
            <AccordionContent>
              Enim sint excepteur elit cillum. In laborum pariatur consectetur
              ipsum enim labore deserunt nostrud aliqua cupidatat. Sit officia
              laborum elit fugiat non do. Esse aute qui qui ut ad fugiat in
              dolor dolor id esse. Dolor qui minim dolore elit eiusmod anim
              reprehenderit aliqua in ut ullamco cillum labore excepteur.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionTrigger>
              Exercitation ipsum velit irure esse laborum exercitation
              incididunt velit deserunt et in ex.
            </AccordionTrigger>
            <AccordionContent>
              Sunt eu non incididunt Lorem. Officia laborum duis duis amet aute
              ex cillum. Lorem pariatur eu tempor ut exercitation voluptate eu
              voluptate aliquip adipisicing. Lorem excepteur ex ad adipisicing
              ex adipisicing commodo nulla do do commodo cupidatat.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionTrigger>
              Est do irure enim cillum irure nostrud do.
            </AccordionTrigger>
            <AccordionContent>
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
            <AlertCircle className="w-4" />
          </AlertIcon>
          <AlertTitle>Adipisicing anim proident deserunt.</AlertTitle>
          <AlertDescription>
            Ut velit quis ullamco mollit cupidatat tempor qui exercitation. Ea
            deserunt deserunt nostrud commodo ea. Exercitation labore enim culpa
            dolor enim aliquip enim nisi. Lorem incididunt aute quis esse labore
            excepteur occaecat veniam. Ullamco amet elit aute nostrud laborum
            commodo anim.
          </AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertIcon>
            <AlertCircle className="w-4" />
          </AlertIcon>
          <AlertTitle>Adipisicing anim proident deserunt.</AlertTitle>
          <AlertDescription>
            Ut velit quis ullamco mollit cupidatat tempor qui exercitation. Ea
            deserunt deserunt nostrud commodo ea. Exercitation labore enim culpa
            dolor enim aliquip enim nisi. Lorem incididunt aute quis esse labore
            excepteur occaecat veniam. Ullamco amet elit aute nostrud laborum
            commodo anim.
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
        <h3 className="h3">Chart</h3>
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
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Command</h3>
        <Command className=" border border-border shadow-md w-100">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            {/* <CommandEmpty>No results found.</CommandEmpty> */}
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
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Context Menu</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Data Table</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">DatePicker</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Dialog</h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
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
        <h3 className="h3">Drawer</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">DropdownMenu</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Form</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">HoverCard</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Input</h3>
        <Input id="username" defaultValue="Rareseanu" className="col-span-3" />
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">InputOTP</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Label</h3>
        <Label htmlFor="username">Label For Input</Label>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">MenuBar</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">NavigationMenu</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Pagination</h3>
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
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">RadioGroup</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Resizable</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">ScrollArea</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Select</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Separator</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Sheet</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Sidebar</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Skeleton</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Slider</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Sonner</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Switch</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Table</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Tabs</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">TextArea</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Toast</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Toggle Group</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Toggle</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Tooltip</h3>
      </div>
    </div>
  );
}

export default App;
