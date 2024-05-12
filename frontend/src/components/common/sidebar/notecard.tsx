import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github } from "lucide-react";

export default function NoteCard() {

  const handleButtonClick = () => {
    window.location.href = 'https://github.com/AhmeddEmad7/FindMe_Website'; // Redirect to Google when button is clicked
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>FindMe</CardTitle>
        <CardDescription>
          A powerful tool for detecting and recognizing faces using AI and computer
          vision techniques.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <a href="https://github.com/AhmeddEmad7/FindMe_Website" target="_blank" rel="noopener noreferrer" onClick={handleButtonClick}>
          <Button size="sm" className="w-full">
            <Github className="h-4 w-4 mr-2" />
            View on GitHub
          </Button>
        </a>
      </CardContent>
    </Card>
  );
}
