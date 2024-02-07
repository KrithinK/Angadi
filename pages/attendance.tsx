import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { ResponsiveHeatMap } from "@nivo/heatmap"
import { Navbar } from "@/components/component/Navbar"
import React, { FC, SVGProps } from 'react';

export default function Component() {
    return (
        <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900">
            <Navbar />
            <main className="p-6">
                <div className="grid gap-6">
                    <Card>
                        <CardHeader>
                            <div className="flex justify-between items-center">
                                <CardTitle>Employee Attendance</CardTitle>
                                <Button variant="outline">Add Employee</Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Start Time</TableHead>
                                        <TableHead>End Time</TableHead>
                                        <TableHead>Total Hours</TableHead>
                                        <TableHead>Mark Attendance</TableHead>
                                        <TableHead>Delete Employee</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Test Name 1</TableCell>
                                        <TableCell>
                                            <Input defaultValue="09:00" type="time" />
                                        </TableCell>
                                        <TableCell>
                                            <Input defaultValue="17:00" type="time" />
                                        </TableCell>
                                        <TableCell>8 hours</TableCell>
                                        <TableCell>
                                            <Button variant="outline">Mark Attendance</Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button className="text-red-500" variant="outline">
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Test Name 2</TableCell>
                                        <TableCell>
                                            <Input defaultValue="10:00" type="time" />
                                        </TableCell>
                                        <TableCell>
                                            <Input defaultValue="18:00" type="time" />
                                        </TableCell>
                                        <TableCell>8 hours</TableCell>
                                        <TableCell>
                                            <Button variant="outline">Mark Attendance</Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button className="text-red-500" variant="outline">
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Test Name 3</TableCell>
                                        <TableCell>
                                            <Input defaultValue="09:30" type="time" />
                                        </TableCell>
                                        <TableCell>
                                            <Input defaultValue="17:30" type="time" />
                                        </TableCell>
                                        <TableCell>8 hours</TableCell>
                                        <TableCell>
                                            <Button variant="outline">Mark Attendance</Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button className="text-red-500" variant="outline">
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Attendance History</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="w-full max-w-2xl mx-auto">
                                <HeatmapChart className="w-full aspect-[4/3]" />
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Attendance History Table</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table className="table-auto w-full text-left whitespace-no-wrap">
                                <TableHeader>
                                    <TableRow className="text-sm font-medium text-gray-700 dark:text-gray-100">
                                        <TableHead className="p-4">Name</TableHead>
                                        <TableHead className="p-4">Date</TableHead>
                                        <TableHead className="p-4">Start Time</TableHead>
                                        <TableHead className="p-4">End Time</TableHead>
                                        <TableHead className="p-4">Total Hours</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow className="text-sm text-gray-700 dark:text-gray-100">
                                        <TableCell className="p-4">Test Name 1</TableCell>
                                        <TableCell className="p-4">2024-01-13</TableCell>
                                        <TableCell className="p-4">09:00</TableCell>
                                        <TableCell className="p-4">17:00</TableCell>
                                        <TableCell className="p-4">8 hours</TableCell>
                                    </TableRow>
                                    <TableRow className="text-sm text-gray-700 dark:text-gray-100">
                                        <TableCell className="p-4">Test Name 2</TableCell>
                                        <TableCell className="p-4">2024-01-13</TableCell>
                                        <TableCell className="p-4">10:00</TableCell>
                                        <TableCell className="p-4">18:00</TableCell>
                                        <TableCell className="p-4">8 hours</TableCell>
                                    </TableRow>
                                    <TableRow className="text-sm text-gray-700 dark:text-gray-100">
                                        <TableCell className="p-4">Test Name 3</TableCell>
                                        <TableCell className="p-4">2024-01-13</TableCell>
                                        <TableCell className="p-4">09:30</TableCell>
                                        <TableCell className="p-4">17:30</TableCell>
                                        <TableCell className="p-4">8 hours</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}


function HeatmapChart(props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props}>
            <ResponsiveHeatMap
                data={[
                    {
                        id: "A",
                        data: [
                            {
                                x: "1",
                                y: 4415,
                            },
                            {
                                x: "2",
                                y: -59456,
                            },
                            {
                                x: "3",
                                y: -79886,
                            },
                            {
                                x: "4",
                                y: 14478,
                            },
                            {
                                x: "5",
                                y: -63874,
                            },
                            {
                                x: "6",
                                y: -47542,
                            },
                            {
                                x: "7",
                                y: 16635,
                            },
                            {
                                x: "8",
                                y: -30278,
                            },
                            {
                                x: "9",
                                y: -95178,
                            },
                        ],
                    },
                    {
                        id: "B",
                        data: [
                            {
                                x: "1",
                                y: 41241,
                            },
                            {
                                x: "2",
                                y: -77516,
                            },
                            {
                                x: "3",
                                y: -19422,
                            },
                            {
                                x: "4",
                                y: 61220,
                            },
                            {
                                x: "5",
                                y: -65044,
                            },
                            {
                                x: "6",
                                y: -59254,
                            },
                            {
                                x: "7",
                                y: 9299,
                            },
                            {
                                x: "8",
                                y: -58470,
                            },
                            {
                                x: "9",
                                y: 51828,
                            },
                        ],
                    },
                    {
                        id: "C",
                        data: [
                            {
                                x: "1",
                                y: 94426,
                            },
                            {
                                x: "2",
                                y: 31248,
                            },
                            {
                                x: "3",
                                y: -15766,
                            },
                            {
                                x: "4",
                                y: 22271,
                            },
                            {
                                x: "5",
                                y: 86246,
                            },
                            {
                                x: "6",
                                y: -23717,
                            },
                            {
                                x: "7",
                                y: 97595,
                            },
                            {
                                x: "8",
                                y: -69800,
                            },
                            {
                                x: "9",
                                y: 74453,
                            },
                        ],
                    },
                    {
                        id: "D",
                        data: [
                            {
                                x: "1",
                                y: -49899,
                            },
                            {
                                x: "2",
                                y: 13864,
                            },
                            {
                                x: "3",
                                y: -45673,
                            },
                            {
                                x: "4",
                                y: -20270,
                            },
                            {
                                x: "5",
                                y: 99430,
                            },
                            {
                                x: "6",
                                y: 17283,
                            },
                            {
                                x: "7",
                                y: -6514,
                            },
                            {
                                x: "8",
                                y: -21766,
                            },
                            {
                                x: "9",
                                y: -52610,
                            },
                        ],
                    },
                    {
                        id: "E",
                        data: [
                            {
                                x: "1",
                                y: 81123,
                            },
                            {
                                x: "2",
                                y: -25153,
                            },
                            {
                                x: "3",
                                y: 2577,
                            },
                            {
                                x: "4",
                                y: 24409,
                            },
                            {
                                x: "5",
                                y: 82923,
                            },
                            {
                                x: "6",
                                y: 51283,
                            },
                            {
                                x: "7",
                                y: 10208,
                            },
                            {
                                x: "8",
                                y: 4055,
                            },
                            {
                                x: "9",
                                y: -14699,
                            },
                        ],
                    },
                ]}
                margin={{ top: 0, right: 10, bottom: 30, left: 30 }}
                axisTop={null}
                axisBottom={{
                    tickSize: 0,
                    tickPadding: 16,
                }}
                axisLeft={{
                    tickSize: 0,
                    tickPadding: 16,
                }}
                colors={{
                    type: "sequential",
                    scheme: "blue_green",
                }}
                theme={{
                    tooltip: {
                        chip: {
                            borderRadius: "9999px",
                        },
                        container: {
                            fontSize: "12px",
                            textTransform: "capitalize",
                            borderRadius: "6px",
                        },
                    },
                }}
                role="application"
                ariaLabel="A heatmap chart/matrix"
            />
        </div>
    )
}
