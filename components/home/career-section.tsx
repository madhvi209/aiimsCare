/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function JobApplicationForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        mobileNumber: "",
        fatherName: "",
        permanentAddress: "",
        currentAddress: "",
        aadharNumber: "",
        registrationNumber: "",
        yearsExperience: "",
        fieldExpertise: "",
    });

    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // List of required fields (excluding registrationNumber and currentAddress)
    const requiredFields: (keyof typeof formData)[] = [
        "fullName",
        "mobileNumber",
        "fatherName",
        "permanentAddress",
        "aadharNumber",
        "yearsExperience",
        "fieldExpertise",
    ];

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        // Check for empty required fields
        const missingFields = requiredFields.filter(
            (field) => !formData[field] || formData[field].trim() === ""
        );

        if (missingFields.length > 0) {
            setError("Please fill all required fields before submitting the application.");
            return;
        }

        setSubmitting(true);

        try {
            const res = await fetch("/api/sendCareerApplication", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await res.json();
            if (result.success) {
                setSuccess(true);
                setFormData({
                    fullName: "",
                    mobileNumber: "",
                    fatherName: "",
                    permanentAddress: "",
                    currentAddress: "",
                    aadharNumber: "",
                    registrationNumber: "",
                    yearsExperience: "",
                    fieldExpertise: "",
                });
            } else {
                setError("Failed to send application. Please try again.");
            }
        } catch (error) {
            console.error("error", error);
            setError("Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-semibold text-blue-900 mb-3">Join Our Team</h1>
                    <p className="text-blue-900 leading-relaxed">
                        Be part of a compassionate team that brings quality healthcare to homes across India. Apply now to make a
                        difference in people's lives.
                    </p>
                </div>

                {success && (
                    <div className="mb-6 p-4 rounded bg-green-100 text-green-800 text-center font-medium">
                        Application submitted! We’ll contact you soon.
                    </div>
                )}
                {error && (
                    <div className="mb-6 p-4 rounded bg-red-100 text-red-800 text-center font-medium">
                        {error}
                    </div>
                )}

                <form className="space-y-8" onSubmit={handleSubmit}>
                    {/* Personal Information Section */}
                    <div>
                        <h2 className="text-lg font-medium text-gray-900 mb-6 pb-2 border-b border-gray-200">
                            Personal Information
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                                    Full Name <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="fullName"
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="mt-1"
                                    required
                                    value={formData.fullName}
                                    onChange={e => handleInputChange("fullName", e.target.value)}
                                />
                            </div>

                            <div>
                                <Label htmlFor="mobileNumber" className="text-sm font-medium text-gray-700">
                                    Mobile Number <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="mobileNumber"
                                    type="tel"
                                    placeholder="Enter 10-digit mobile number"
                                    className="mt-1"
                                    required
                                    value={formData.mobileNumber}
                                    onChange={e => handleInputChange("mobileNumber", e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <Label htmlFor="fatherName" className="text-sm font-medium text-gray-700">
                                Father&apos;s Name <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="fatherName"
                                type="text"
                                placeholder="Enter father's name"
                                className="mt-1"
                                required
                                value={formData.fatherName}
                                onChange={e => handleInputChange("fatherName", e.target.value)}
                            />
                        </div>

                        <div className="mt-6">
                            <Label htmlFor="permanentAddress" className="text-sm font-medium text-gray-700">
                                Permanent Address <span className="text-red-500">*</span>
                            </Label>
                            <Textarea
                                id="permanentAddress"
                                placeholder="Enter your permanent address"
                                className="mt-1 min-h-[80px]"
                                required
                                value={formData.permanentAddress}
                                onChange={e => handleInputChange("permanentAddress", e.target.value)}
                            />
                        </div>

                        <div className="mt-6">
                            <Label htmlFor="currentAddress" className="text-sm font-medium text-gray-700">
                                Current Address
                            </Label>
                            <Textarea
                                id="currentAddress"
                                placeholder="Enter your current address (if different from permanent)"
                                className="mt-1 min-h-[80px]"
                                value={formData.currentAddress}
                                onChange={e => handleInputChange("currentAddress", e.target.value)}
                            />
                        </div>

                        <div className="mt-6">
                            <Label htmlFor="aadharNumber" className="text-sm font-medium text-gray-700">
                                Aadhar Card Number <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="aadharNumber"
                                type="text"
                                placeholder="Enter 12-digit Aadhar number"
                                className="mt-1"
                                required
                                value={formData.aadharNumber}
                                onChange={e => handleInputChange("aadharNumber", e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Professional Details Section */}
                    <div>
                        <h2 className="text-lg font-medium text-gray-900 mb-6 pb-2 border-b border-gray-200">
                            Professional Details
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <Label htmlFor="registrationNumber" className="text-sm font-medium text-gray-700">
                                    Registration Number
                                </Label>
                                <Input
                                    id="registrationNumber"
                                    type="text"
                                    placeholder="Enter registration number"
                                    className="mt-1"
                                    value={formData.registrationNumber}
                                    onChange={e => handleInputChange("registrationNumber", e.target.value)}
                                />
                            </div>

                            <div>
                                <Label htmlFor="yearsExperience" className="text-sm font-medium text-gray-700">
                                    Years of Experience <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="yearsExperience"
                                    type="number"
                                    placeholder="Enter years of experience"
                                    className="mt-1"
                                    required
                                    value={formData.yearsExperience}
                                    onChange={e => handleInputChange("yearsExperience", e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <Label htmlFor="fieldExpertise" className="text-sm font-medium text-gray-700">
                                Field of Expertise <span className="text-red-500">*</span>
                            </Label>
                            <Textarea
                                id="fieldExpertise"
                                placeholder="e.g., ICU Care, Elderly Care, Pediatric Care"
                                className="mt-1 min-h-[60px]"
                                required
                                value={formData.fieldExpertise}
                                onChange={e => handleInputChange("fieldExpertise", e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <Button
                            type="submit" onClick={handleSubmit}
                            className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 text-base font-medium"
                            disabled={submitting}
                        >
                            {submitting ? "Submitting..." : "Submit Application"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
