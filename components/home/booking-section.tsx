// app/booking/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft, ChevronRight, Check, Calendar, MapPin, User} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BookingPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        serviceType: "",
        details: "",
        address: "",
        timeSlot: ""
    });

    const serviceTypes = [
        "Certified Nurse",
        "GDA(General Duty Assistant)",
        "Injection Administration",
        "IV Cannulation & Fluid Therapy",
        "Wound & Diabetic Care",
        "Catheterization Services",
        "Nasogastric Intubation",
        "Tracheostomy & PEG Care",
        "Peritoneal Dialysis",
        "Post-Surgical Care",
        "Emergency Medical Support",
        "Other (Please specify in details)"
    ];

    const timeSlots = [
        "Morning (8:00 AM - 12:00 PM)",
        "Afternoon (12:00 PM - 4:00 PM)",
        "Evening (4:00 PM - 8:00 PM)",
        "Night (8:00 PM - 8:00 AM)",
        "Emergency (Immediate)"
    ];

    const steps = [
        { number: 1, title: "Personal Information", icon: User },
        { number: 2, title: "Service Details", icon: Calendar },
        { number: 3, title: "Location & Schedule", icon: MapPin },
        { number: 4, title: "Review & Confirm", icon: Check }
    ];

    const nextStep = () => {
        if (currentStep < 4) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async () => {
        try {
            const res = await fetch("/api/sendBooking", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await res.json();
            if (result.success) {
                alert("Booking submitted! We’ll contact you shortly.");
            } else {
                alert("Failed to send booking. Please try again.");
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong.");
        }
    };


    return (
        <section id="booking" className="py-20 bg-[#FFFFFF]">
            <div className="max-w-[85rem] mx-auto px-4">
                {/* <div className="container mx-auto px-4 max-w-4xl"> */}
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#001055] mb-6">
                        Book Your Home Care
                    </h2>
                    <p className="text-xl text-[#8B95A1]">
                        Get professional medical care at your doorstep in just a few simple
                        steps
                    </p>
                </motion.div>

                {/* Progress Steps */}
                <div className="mb-12">
                    {/* Step Circles */}
                    <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center">
                        {steps.map((step, index) => (
                            <div key={step.number} className="flex items-center">
                                <div
                                    className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 transition-all duration-300 ${currentStep >= step.number
                                        ? "bg-[#001055] border-[#001055] text-[#FFFFFF]"
                                        : "border-[#8B95A1] text-[#8B95A1]"
                                        }`}
                                >
                                    {currentStep > step.number ? (
                                        <Check className="w-5 h-5 sm:w-6 sm:h-6" />
                                    ) : (
                                        <step.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                    )}
                                </div>
                                {index < steps.length - 1 && (
                                    <div
                                        className={`hidden sm:block w-20 md:w-32 h-0.5 mx-4 transition-all duration-300 ${currentStep > step.number
                                            ? "bg-[#001055]"
                                            : "bg-gray-300"
                                            }`}
                                    ></div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Step Titles with Grey Lines */}
                    <div className="flex flex-col sm:flex-row sm:justify-between mt-6">
                        {steps.map(step => (
                            <div key={step.number} className="text-center sm:-mr-4 mb-2 sm:mb-0">
                                <div
                                    className="text-sm font-medium"
                                    style={{ color: currentStep >= step.number ? "#001055" : "#8B95A1" }}
                                >
                                    {step.title}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Form Card */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl text-[#001055]">
                            Step {currentStep}: {steps[currentStep - 1].title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Step 1 */}
                            {currentStep === 1 && (
                                <div className="space-y-6 text-[#001055] text-xl">
                                    <div>
                                        <Label htmlFor="fullName" className="p-2 ">Full Name *</Label>
                                        <Input
                                            id="fullName"
                                            value={formData.fullName}
                                            onChange={e =>
                                                handleInputChange("fullName", e.target.value)
                                            }
                                            placeholder="Enter your full name"
                                            required
                                            className="h-11 border-gray-100"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="phone" className="p-2">Phone Number *</Label>
                                        <Input
                                            id="phone"
                                            value={formData.phone}
                                            onChange={e => handleInputChange("phone", e.target.value)}
                                            placeholder="+91 XXXXXXXXXX"
                                            required
                                            className="h-11 border-gray-100"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="email" className="p-2">Email Address</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={e => handleInputChange("email", e.target.value)}
                                            placeholder="your.email@example.com"
                                            className="h-11 border-gray-100"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Step 2 */}
                            {currentStep === 2 && (
                                <div className="space-y-6 text-[#001055] text-xl">
                                    <div className="w-full sm:w-[25rem] h-16">
                                        <Label htmlFor="serviceType" className="p-2">Select Service *</Label>
                                        <Select
                                            onValueChange={value => handleInputChange("serviceType", value)}
                                        >
                                            <SelectTrigger className="w-full h-12 text-gray-900 bg-white border border-gray-100">
                                                {/* solid background */}
                                                <SelectValue placeholder="Choose service" />
                                            </SelectTrigger>
                                            <SelectContent className="w-full bg-white text-gray-900">
                                                {serviceTypes.map(service => (
                                                    <SelectItem key={service} value={service} className="text-gray-900 opacity-100">
                                                        {service}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>


                                    <div>
                                        <Label htmlFor="details" className="p-2">Additional Details</Label>
                                        <Textarea
                                            id="details"
                                            value={formData.details}
                                            onChange={e =>
                                                handleInputChange("details", e.target.value)
                                            }
                                            placeholder="Describe your needs or requirements..."
                                            rows={4}
                                            className="border-gray-100"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Step 3 */}
                            {currentStep === 3 && (
                                <div className="space-y-6 text-xl text-[#001055]">
                                    <div>
                                        <Label htmlFor="address" className="p-2 ">Complete Address *</Label>
                                        <Textarea
                                            id="address"
                                            value={formData.address}
                                            onChange={e =>
                                                handleInputChange("address", e.target.value)
                                            }
                                            placeholder="House/Flat No, Street, City, State, PIN"
                                            rows={3}
                                            required
                                            className="border-gray-100"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="timeSlot" className="p-2 ">Preferred Time Slot *</Label>
                                        <Select
                                            onValueChange={value =>
                                                handleInputChange("timeSlot", value)
                                            }
                                        >
                                            <SelectTrigger className="border-gray-100 w-[20rem]">
                                                <SelectValue placeholder="Select time slot" className="w-[25rem] " />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {timeSlots.map(slot => (
                                                    <SelectItem key={slot} value={slot}>
                                                        {slot}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            )}

                            {/* Step 4 */}
                            {currentStep === 4 && (
                                <div className="space-y-6">
                                    <h3 className="text-lg font-semibold text-[#001055] mb-4">
                                        Review your information:
                                    </h3>
                                    <div className="grid gap-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <span className="font-medium">Name:</span>
                                                <p className="text-[#8B95A1]">
                                                    {formData.fullName}
                                                </p>
                                            </div>
                                            <div>
                                                <span className="font-medium">Phone:</span>
                                                <p className="text-[#8B95A1]">
                                                    {formData.phone}
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="font-medium">Service:</span>
                                            <p className="text-[#8B95A1]">
                                                {formData.serviceType}
                                            </p>
                                        </div>
                                        <div>
                                            <span className="font-medium">Time Slot:</span>
                                            <p className="text-[#8B95A1]">
                                                {formData.timeSlot}
                                            </p>
                                        </div>
                                        <div>
                                            <span className="font-medium">Address:</span>
                                            <p className="text-[#8B95A1]">
                                                {formData.address}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-[#001055]/10 p-4 rounded-lg">
                                        <p className="text-sm text-[#001055] font-medium">
                                            ✓ Our team will contact you within 30 minutes to confirm
                                            your booking.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </motion.div>

                        {/* Navigation */}
                        <div className="flex justify-between mt-8">
                            <Button
                                variant="outline"
                                onClick={prevStep}
                                disabled={currentStep === 1}
                            >
                                <ChevronLeft className="w-4 h-4 mr-2" />
                                Previous
                            </Button>

                            {currentStep < 4 ? (
                                <Button className="bg-[#001055] text-[#fff] hover:bg-[#001082]" onClick={nextStep}>
                                    Next
                                    <ChevronRight className="w-4 h-4 ml-2" />
                                </Button>
                            ) : (
                                <Button onClick={handleSubmit} className="bg-[#001055] text-[#ffff] hover:bg-[#001082]">
                                    Book Appointment
                                    <Check className="w-4 h-4 ml-2" />
                                </Button>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
