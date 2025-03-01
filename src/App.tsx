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

function App() {
  return (
    <div className="flex flex-col gap-30">
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
        <Alert>
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
        <h3 className="h3">Alert Dialog</h3>
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
          <Button variant="normal">Button Texet</Button>
          <Button variant="inverted">Button Texet</Button>
          <Button variant="outline">Button Texet</Button>
          <Button variant="ghost">Button Texet</Button>
          <Button variant="link">Button Texet</Button>
          <Button disabled>Button Texet</Button>
          <Button icon>3</Button>
        </div>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Calendar</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Card</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Carousel</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Chart</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Checkbox</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Collapsible</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">ComboBox</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Command</h3>
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
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">InputOTP</h3>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="h3">Label</h3>
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
