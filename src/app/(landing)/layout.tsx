import { LandingNavbar } from "./_components/navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full">
      <div className="mx-auto h-full w-full max-w-screen-xl">
        <LandingNavbar />
        {children}
      </div>
    </main>
  );
};

export default LandingLayout;
