import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Minimize2, MousePointerClick, LineChart } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const [longUrl, setLongUrl] = useState("");
  const navigate = useNavigate();

  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl) navigate(`/auth?createNew=${longUrl}`);
  };
  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl  text-center font-extrabold">
        The only URL Shortener <br /> you&rsquo;ll ever need! 👇
      </h2>
      <form
        onSubmit={handleShorten}
        className="sm:h-14 flex flex-col rounded-lg sm:flex-row w-full relative md:w-2/4 gap-2 shadow-[0px_0px_20px_4px_#facc1520,_0px_5px_30px_#facc1540]"
      >
        <Input
          type="url"
          placeholder="Enter your looooong URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="h-full flex-1 py-4 px-4 border-0 dark:border-2 font-semibold focus-visible:ring-primary"
        />
        <Button type="submit" className="h-full font-bold absolute right-0" variant="default">
          Shorten !! 
        </Button>
      </form>
      <div className='py-20 grid grid-cols-3 gap-10'>
      <Card className="flex flex-col items-center">
        <CardHeader className="flex flex-col items-center">
          <Minimize2 size={120} className='text-primary mb-5 drop-shadow-[0_10px_40px_#facc15]'/>
          <CardTitle>Shorten URLs</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-center opacity-50'>Makes long links look cleaner and easier to share! Add Custom Links to personalize your URLs with QR Codes.</p>
        </CardContent>
      </Card>
      <Card className="flex flex-col items-center">
        <CardHeader className="flex flex-col items-center">
          <MousePointerClick size={120} className='text-primary mb-5 drop-shadow-[0_10px_40px_#facc15]'/>
          <CardTitle>Get Click Counts</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-center opacity-50'>Provides real-time click counts for your shortened links, helping you measure engagement easily and efficiently.</p>
        </CardContent>
      </Card>
      <Card className="flex flex-col items-center">
        <CardHeader className="flex flex-col items-center">
          <LineChart size={120} className='text-primary mb-5 drop-shadow-[0_10px_40px_#facc15]'/>
          <CardTitle>Track Link Clicks</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-center opacity-50'>Monitor link performance with Shortnrr's detailed click tracking, giving you insights into location and devices.</p>
        </CardContent>
      </Card>
      </div>
      {/* <img
        src="/banner.jpg" // replace with 2 in small screens
        className="w-full my-11 md:px-11"
      /> */}
      <Accordion type="multiple" collapsible className="w-full md:px-11">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            How does the Trimrr URL shortener works?
          </AccordionTrigger>
          <AccordionContent>
            When you enter a long URL, our system generates a shorter version of
            that URL. This shortened URL redirects to the original long URL when
            accessed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Do I need an account to use the app?
          </AccordionTrigger>
          <AccordionContent>
            Yes. Creating an account allows you to manage your URLs, view
            analytics, and customize your short URLs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What analytics are available for my shortened URLs?
          </AccordionTrigger>
          <AccordionContent>
            You can view the number of clicks, geolocation data of the clicks
            and device types (mobile/desktop) for each of your shortened URLs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Landing