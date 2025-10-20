import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import {
  Plus,
  HelpCircle,
  LogOut,
  Settings,
} from 'lucide-react';

type HeaderProps = {
  onCreateNew: () => void;
  onLogout: () => void;
  onSettings: () => void;
  userEmail: string;
  onShowHelp: () => void;
};

function getInitials(email: string) {
  const name = email.split('@')[0];
  return name.substring(0, 2).toUpperCase();
}

export function Header({ onCreateNew, onLogout, onSettings, userEmail, onShowHelp }: HeaderProps) {
  return (
    <header className="border-b border-border bg-white sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">B</span>
            </div>
            <div>
              <h1 className="text-foreground font-semibold">ProposeMe</h1>
              <p className="text-muted-foreground text-sm">Dashboard</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button onClick={onCreateNew} size="lg" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              <span className="hidden lg:inline">New Proposal</span>
            </Button>

            <Button variant="ghost" size="icon" onClick={onShowHelp} title="Help & Tutorial" aria-label="Help & Tutorial">
              <HelpCircle className="h-4 w-4" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {getInitials(userEmail)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Account</p>
                    <p className="text-xs leading-none text-muted-foreground truncate">{userEmail}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={onSettings}>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={onLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}