import { cn } from "@/libs/utils";

const Card = ({ className = '', children, overflow = true }) => {
  const overflowClass = overflow ? 'overflow-hidden' : '';
  return (
    <section className={cn('bg-white shadow-md rounded-lg mt-5 mb-3', overflowClass, className)}>
      <div className="p-4">{children}</div>
    </section>
  );
};

export default Card;