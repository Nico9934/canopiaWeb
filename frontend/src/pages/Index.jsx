import React from "react";
import Hero from "../components/Hero";
import ServicesGallery from "../components/ServicesGallery";
import IconSection from "../components/IconSection";
import UserForm from "../components/UserForm";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="">
      <Hero />
      <ServicesGallery />
      <IconSection />
      <UserForm />
      <Footer />
    </div>
  );
};

export default Index;
