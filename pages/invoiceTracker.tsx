import { Inter } from 'next/font/google'
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Navbar } from '@/components/component/Navbar'
import { InvCard } from '@/components/component/invoice-card'
import { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

// Mock invoice data
type Invoice = {
    employeeName: string;
    billNumber: string;
    status: string;
    invoiceSentDate: string;
    invoiceSubmittedDate: string | "-";
};

const invoiceData: Invoice[] = [
    {
        employeeName: "Jane Doe",
        billNumber: "123456",
        status: "Submitted",
        invoiceSentDate: "2024-01-02",
        invoiceSubmittedDate: "2024-01-04"
    },
    {
        employeeName: "John Doe",
        billNumber: "734654",
        status: "Pending",
        invoiceSentDate: "2024-01-02",
        invoiceSubmittedDate: "-"
    },
    {
        employeeName: "Jane Doe",
        billNumber: "789012",
        status: "Submitted",
        invoiceSentDate: "2024-01-05",
        invoiceSubmittedDate: "2024-01-07"
    },
    {
        employeeName: "John Doe",
        billNumber: "345678",
        status: "Pending",
        invoiceSentDate: "2024-01-05",
        invoiceSubmittedDate: "-"
    }
];

export default function Invoice() {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filteredInvoices = invoiceData.filter((invoice: Invoice) => {
        return (
            invoice.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            invoice.billNumber.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    return (
        <div className="flex flex-col h-screen bg-gray-200 dark:bg-gray-800">
            <Navbar />
            <main className="flex-1 overflow-y-auto p-6">
                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Manage Invoices</h2>
                <Card className="shadow-lg rounded-lg overflow-hidden w-full">
                    <CardHeader className="bg-blue-500 text-white p-4">
                        <CardTitle>Create New Invoice</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                        <form className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="date">Date Of Invoice</Label>
                                <Input id="date" type="date" className="text-white" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="Employee">Employee Name</Label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select an Employee" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Employees</SelectLabel>
                                            {[...new Set(invoiceData.map((invoice: Invoice) => invoice.employeeName))].map((employeeName: string, index: number) => (
                                                <SelectItem key={index} value={employeeName}>{employeeName}</SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="bill">Bill Number</Label>
                                <Input id="bill" placeholder="Enter bill number" />
                            </div>
                            <Button className="w-full bg-blue-200 hover:bg-blue-300 text-white" type="submit">
                                Create Invoice
                            </Button>
                        </form>
                    </CardContent>
                </Card>
                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mt-8 mb-4">Invoice List</h2>
                <div className="flex items-center justify-between mb-4">
                    <Input
                        className="w-full"
                        placeholder="Search Invoices by Invoice Number or Employee Name"
                        value={searchTerm}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="grid gap-4">
                    {filteredInvoices.map((invoice: Invoice, index: number) => (
                        <InvCard
                            key={index}
                            employeeName={invoice.employeeName}
                            billNumber={invoice.billNumber}
                            status={invoice.status}
                            invoiceSentDate={invoice.invoiceSentDate}
                            invoiceSubmittedDate={invoice.invoiceSubmittedDate}
                        />
                    ))}
                </div>
            </main>
        </div>
    )
}
