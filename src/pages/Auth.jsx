import { UrlState } from '@/Context'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Auth = () => {
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const {isAuthenticated, loading} = UrlState();
  const longLink = searchParams.get("createNew");

  useEffect(() => {
    if (isAuthenticated && !loading)
      navigate(`/dashboard?${longLink ? `createNew=${longLink}` : ""}`);
  }, [isAuthenticated, loading, navigate]);
  return (
    <div className="mt-[4rem] flex flex-col items-center gap-10">
      <h1 className="text-4xl font-extrabold">
        {searchParams.get("createNew")
          ? "Hold up! Let's login first.."
          : "Login / Signup"}
      </h1>

      <Tabs defaultValue="login" className="w-[300px] sm:w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Log in</TabsTrigger>
          <TabsTrigger value="signup">Sign up</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Login />
        </TabsContent>
        <TabsContent value="signup">
          <Signup />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Auth