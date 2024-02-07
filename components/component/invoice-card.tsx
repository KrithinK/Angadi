import React from 'react';
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface InvoiceCardProps {
    employeeName: string;
    billNumber: string;
    status: string;
    invoiceSentDate: string;
    invoiceSubmittedDate: string;
}

export function InvCard(props: InvoiceCardProps) {
    const { employeeName, billNumber, status, invoiceSentDate, invoiceSubmittedDate } = props;

    let cardColor = "";
    if (status === "Pending") {
        cardColor = "bg-yellow-200 dark:bg-yellow-400";
    } else if (status === "Submitted") {
        cardColor = "bg-green-200 dark:bg-green-400";
    }

    return (
        <Card className={`shadow-lg rounded-lg overflow-hidden w-full ${cardColor}`}>
            <CardHeader className="p-4">
                <CardTitle className="text-black">Invoice No. - {billNumber}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 grid gap-2 grid-cols-2 text-black dark:text-black">
                <p>
                    <strong>Employee Name:</strong> {employeeName}
                </p>
                <p>
                    <strong>Bill Number:</strong> {billNumber}
                </p>
                <p>
                    <strong>Status:  </strong>
                    <span className={`inline-block px-2 py-1 rounded ${status === "Pending" ? "bg-yellow-200 text-yellow-700" : status === "Submitted" ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"}`}>
                        {status}
                    </span>
                </p>
                <p>
                    <strong>Invoice Sent Date:</strong> {invoiceSentDate}
                </p>
                <p>
                    <strong>Invoice Submitted Date:</strong> {invoiceSubmittedDate}
                </p>
                <Button
                    className="border-yellow-200 text-yellow-700 hover:bg-yellow-200 hover:text-white col-span-2"
                    size="sm"
                    variant="outline"
                >
                    {status === "Pending" ? "Submit Invoice" : "Invoice Submitted"}
                </Button>
            </CardContent>
        </Card>
    );
};
