import Company from "@/components/Company";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "会社概要 | Comp Systems",
};

export default function CompanyPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <NavBar />
      <div className="pt-24">
        <Company />
      </div>
      <Footer />
    </main>
  );
}
