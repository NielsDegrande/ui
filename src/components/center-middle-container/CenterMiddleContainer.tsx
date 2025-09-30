export const CenterMiddleContainer = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen flex-1">
      {children}
    </div>
  );
};
