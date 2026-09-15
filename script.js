
 // Define card data with real couple images from Unsplash and romantic messages
const cardData = [
    { 
        frontImage: "https://plus.unsplash.com/premium_photo-1691030255934-45db499c25b0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "image"
    },
    { 
        frontImage: "https://plus.unsplash.com/premium_photo-1661964087689-ac4784c98004?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "message",
        message: "Your smile is my favorite notification ♥"
    },
    { 
        frontImage: "https://plus.unsplash.com/premium_photo-1661964459043-9a346662cdaf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "image" 
    },
    { 
        frontImage: "https://images.unsplash.com/photo-1699909539364-140f49181b4b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "message",
        message: "In a world of billions, you're my one in infinity ✨"
    },
    { 
        frontImage: "https://plus.unsplash.com/premium_photo-1691030256235-47d75d5890b9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "image" 
    },
    { 
        frontImage: "https://plus.unsplash.com/premium_photo-1691030256206-b7398c8bfc49?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "message",
        message: "Every love song makes sense when I think of you 🎵"
    },
    { 
        frontImage: "https://plus.unsplash.com/premium_photo-1691030256416-3d4613ec82cf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "image" 
    },
    { 
        frontImage: "https://images.unsplash.com/photo-1735052712464-9d24b69be5f5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "message",
        message: "You're the reason I believe in fairy tales 🌟"
    },
    { 
        frontImage: "https://images.unsplash.com/photo-1726068987563-024f37420899?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "message",
        message: "My heart skips a beat every time I see your name 💕"
    },
    { 
        frontImage: "https://images.unsplash.com/photo-1688850771088-ea838f3ed5ce?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "image"
    },
    { 
        frontImage: "https://images.unsplash.com/photo-1648724145806-2dd46cd02ea6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "message",
        message: "You're my today and all of my tomorrows 🌙"
    },
    { 
        frontImage: "https://images.unsplash.com/photo-1693673556023-ecdeb0a8ebf2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "image"
    }
];

        // Track interaction for each card
        let cardInteractions = new Array(cardData.length).fill(false);
        let revealButtonThreshold = 0.6; // 60% of cards need to be interacted with
        let musicPlaying = false;

        document.addEventListener('DOMContentLoaded', () => {
            const cardContainer = document.getElementById('card-container');
            const parallaxBg = document.getElementById('parallax-bg');
            const musicToggle = document.getElementById('music-toggle');
            const finalButtonContainer = document.getElementById('final-button-container');
            const finalButton = document.getElementById('final-button');
            const modal = document.getElementById('modal');
            const closeModal = document.getElementById('closeModal');
            const loader = document.querySelector('.loader');

            // Add floating bubbles
            createBubbles();
            
            // Add sparkles
            createSparkles();

            // Hide loader after simulating loading
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 800);
            }, 3000);

            // Create all cards
            createCards();

            // Setup parallax effect
            setupParallax();

            // Setup music toggle
            setupMusic();

            // Setup final button and modal
            setupFinalButton();

            function createBubbles() {
                for (let i = 0; i < 20; i++) {
                    const bubble = document.createElement('div');
                    bubble.className = 'bubble';
                    
                    // Random size between 30px and 100px
                    const size = Math.random() * 70 + 30;
                    bubble.style.width = `${size}px`;
                    bubble.style.height = `${size}px`;
                    
                    // Random horizontal position
                    bubble.style.left = `${Math.random() * 100}%`;
                    
                    // Random starting position
                    bubble.style.bottom = `-${size}px`;
                    
                    // Random delay
                    bubble.style.animationDelay = `${Math.random() * 20}s`;
                    
                    // Random duration between 20s and 35s
                    bubble.style.animationDuration = `${Math.random() * 15 + 20}s`;
                    
                    document.body.appendChild(bubble);
                }
            }
            

            function createSparkles() {
                for (let i = 0; i < 40; i++) {
                    const sparkle = document.createElement('div');
                    sparkle.className = 'sparkle';
                    
                    // Random position
                    sparkle.style.left = `${Math.random() * 100}%`;
                    sparkle.style.top = `${Math.random() * 100}%`;
                    
                    // Random animation delay
                    sparkle.style.animationDelay = `${Math.random() * 3}s`;
                    
                    document.querySelector('.sparkle-overlay').appendChild(sparkle);
                }
            }

            function createCards() {
                cardData.forEach((data, index) => {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.dataset.index = index;

                    // Create card front
                    const cardFront = document.createElement('div');
                    cardFront.className = 'card-front';
                    
                    const frontImg = document.createElement('img');
                    frontImg.src = data.frontImage;
                    frontImg.alt = 'Beautiful couple moment';
                    frontImg.loading = 'lazy';
                    cardFront.appendChild(frontImg);
                    
                    // Create card back
                    const cardBack = document.createElement('div');
                    cardBack.className = 'card-back';
                    
                    if (data.type === 'message') {
                        const message = document.createElement('p');
                        message.innerHTML = data.message;
                        message.style.fontSize = 'clamp(1.3rem, 2.5vw, 1.8rem)';
                        message.style.fontWeight = '600';
                        message.style.color = 'var(--text-color)';
                        message.style.fontFamily = "'Dancing Script', cursive";
                        message.style.textShadow = '0 2px 15px var(--glow-color)';
                        cardBack.appendChild(message);
                    } else {
                        const loveMessage = document.createElement('p');
                        loveMessage.innerHTML = "You make every ordinary moment feel extraordinary ✨";
                        loveMessage.style.fontSize = 'clamp(1.2rem, 2.3vw, 1.6rem)';
                        loveMessage.style.fontWeight = '500';
                        loveMessage.style.color = 'var(--text-color)';
                        loveMessage.style.fontFamily = "'Dancing Script', cursive";
                        loveMessage.style.textShadow = '0 2px 15px var(--glow-color)';
                        cardBack.appendChild(loveMessage);
                    }
                    
                    card.appendChild(cardFront);
                    card.appendChild(cardBack);
                    
                    // Position card within the container with beautiful spread
                    const angle = (index / cardData.length) * 2 * Math.PI;
                    const radius = Math.min(window.innerWidth, window.innerHeight) * 0.25;
                    const x = Math.cos(angle) * radius + (Math.random() * 100 - 50);
                    const y = Math.sin(angle) * radius + (Math.random() * 100 - 50);
                    
                    card.style.left = `calc(50% + ${x}px - 160px)`;
                    card.style.top = `calc(50% + ${y}px - 210px)`;
                    card.style.zIndex = 10 + index;
                    
                    // Random initial rotation for more organic layout
                    const initialRotateX = (Math.random() - 0.5) * 15;
                    const initialRotateY = (Math.random() - 0.5) * 15;
                    card.style.transform = `rotateX(${initialRotateX}deg) rotateY(${initialRotateY}deg)`;
                    
                    // Add card to the container
                    cardContainer.appendChild(card);
                    
                    // Make card draggable
                    makeCardDraggable(card);
                });
            }

            function makeCardDraggable(card) {
                let isDragging = false;
                let isFlipped = false;
                let initialX, initialY;
                let initialCardX, initialCardY;
                let isFirstInteraction = true;
                
                card.addEventListener('mousedown', startDrag);
                card.addEventListener('touchstart', startDrag, { passive: false });
                
                function startDrag(e) {
                    e.preventDefault();
                    const index = parseInt(card.dataset.index);
                    
                    // Bring card to front
                    const allCards = document.querySelectorAll('.card');
                    let maxZIndex = 10;
                    allCards.forEach(c => {
                        const zIndex = parseInt(c.style.zIndex);
                        maxZIndex = Math.max(maxZIndex, zIndex);
                    });
                    card.style.zIndex = maxZIndex + 1;
                    
                    isDragging = true;
                    card.classList.add('active');
                    
                    // Get initial positions
                    if (e.type === 'mousedown') {
                        initialX = e.clientX;
                        initialY = e.clientY;
                    } else {
                        initialX = e.touches[0].clientX;
                        initialY = e.touches[0].clientY;
                    }
                    
                    // Get card's current position
                    const rect = card.getBoundingClientRect();
                    initialCardX = rect.left;
                    initialCardY = rect.top;
                    
                    // Add global events for drag and release
                    document.addEventListener('mousemove', dragMove);
                    document.addEventListener('touchmove', dragMove, { passive: false });
                    document.addEventListener('mouseup', dragEnd);
                    document.addEventListener('touchend', dragEnd);
                    
                    // Check if first interaction with this card
                    if (isFirstInteraction) {
                        isFirstInteraction = false;
                        createParticles(e.clientX || e.touches[0].clientX, e.clientY || e.touches[0].clientY, 'heart');
                        
                        // Mark card as interacted
                        cardInteractions[index] = true;
                        checkInteractionProgress();
                    }
                }
                
                function dragMove(e) {
                    if (!isDragging) return;
                    e.preventDefault();
                    
                    let currentX, currentY;
                    if (e.type === 'mousemove') {
                        currentX = e.clientX;
                        currentY = e.clientY;
                    } else {
                        currentX = e.touches[0].clientX;
                        currentY = e.touches[0].clientY;
                    }
                    
                    // Calculate new position
                    const deltaX = currentX - initialX;
                    const deltaY = currentY - initialY;
                    
                    // Update card position
                    card.style.left = `${initialCardX + deltaX}px`;
                    card.style.top = `${initialCardY + deltaY}px`;
                    
                    // Calculate rotation based on drag distance
                    const rotateX = deltaY * 0.1;
                    const rotateY = -deltaX * 0.1;
                    
                    // Apply 3D transform
                    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                    
                    // Check if card should flip
                    if (Math.abs(rotateY) > 90 && !isFlipped) {
                        isFlipped = true;
                        card.style.transform = `rotateY(180deg)`;
                    } else if (Math.abs(rotateY) <= 90 && isFlipped) {
                        isFlipped = false;
                        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                    }
                    
                    // Create particles on drag
                    if (Math.random() < 0.15) {
                        createParticles(currentX, currentY, Math.random() < 0.6 ? 'sparkle' : 'heart');
                    }
                }
                
                function dragEnd() {
                    if (!isDragging) return;
                    
                    isDragging = false;
                    card.classList.remove('active');
                    
                    // Remove global events
                    document.removeEventListener('mousemove', dragMove);
                    document.removeEventListener('touchmove', dragMove);
                    document.removeEventListener('mouseup', dragEnd);
                    document.removeEventListener('touchend', dragEnd);
                    
                    // Reset rotation gradually
                    setTimeout(() => {
                        if (!isFlipped) {
                            card.style.transform = 'rotateX(0deg) rotateY(0deg)';
                        }
                    }, 100);
                }
                
                // Add click to flip functionality
                card.addEventListener('click', (e) => {
                    if (!isDragging) {
                        e.stopPropagation();
                        isFlipped = !isFlipped;
                        card.style.transform = isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
                        createParticles(e.clientX, e.clientY, 'heart');
                    }
                });
            }

            function createParticles(x, y, type) {
                const particleCount = type === 'heart' ? 3 : 5;
                
                for (let i = 0; i < particleCount; i++) {
                    const particle = document.createElement('div');
                    
                    if (type === 'heart') {
                        particle.className = 'heart-particle';
                        particle.innerHTML = '♥';
                        particle.style.fontSize = `${Math.random() * 10 + 20}px`;
                    } else {
                        particle.className = 'particle';
                        particle.style.width = `${Math.random() * 6 + 4}px`;
                        particle.style.height = particle.style.width;
                        particle.style.background = `linear-gradient(45deg, var(--accent-color), white)`;
                        particle.style.boxShadow = `0 0 10px var(--gold-glow)`;
                    }
                    
                    // Position at cursor/touch point
                    particle.style.left = `${x + (Math.random() * 40 - 20)}px`;
                    particle.style.top = `${y + (Math.random() * 40 - 20)}px`;
                    
                    document.body.appendChild(particle);
                    
                    // Remove particle after animation
                    setTimeout(() => {
                        particle.remove();
                    }, type === 'heart' ? 3500 : 2000);
                }
            }

            function checkInteractionProgress() {
                const interactedCount = cardInteractions.filter(interacted => interacted).length;
                const totalCards = cardData.length;
                const progress = interactedCount / totalCards;
                
                if (progress >= revealButtonThreshold) {
                    setTimeout(() => {
                        finalButtonContainer.classList.add('visible');
                    }, 1000);
                }
            }

            function setupParallax() {
                let mouseX = 0, mouseY = 0;
                
                document.addEventListener('mousemove', (e) => {
                    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
                    mouseY = (e.clientY / window.innerHeight) * 2 - 1;
                    
                    const moveX = mouseX * 20;
                    const moveY = mouseY * 20;
                    
                    parallaxBg.style.transform = `translate(${moveX}px, ${moveY}px)`;
                });
            }

            function setupMusic() {
                musicToggle.addEventListener('click', () => {
                    musicPlaying = !musicPlaying;
                    
                    if (musicPlaying) {
                        // In a real implementation, you would play actual romantic music
                        console.log('Playing romantic background music...');
                        musicToggle.style.background = 'linear-gradient(145deg, var(--accent-color), var(--primary-color))';
                    } else {
                        console.log('Pausing music...');
                        musicToggle.style.background = 'linear-gradient(145deg, var(--secondary-color), var(--primary-color))';
                    }
                });
            }

            function setupFinalButton() {
                finalButton.addEventListener('click', () => {
                    modal.style.display = 'block';
                    createConfetti();
                });
                
                closeModal.addEventListener('click', () => {
                    modal.style.display = 'none';
                });
                
                window.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        modal.style.display = 'none';
                    }
                });
            }

            function createConfetti() {
                for (let i = 0; i < 50; i++) {
                    setTimeout(() => {
                        const confetti = document.createElement('div');
                        confetti.className = 'heart-particle';
                        confetti.innerHTML = ['♥', '✨', '💕', '🌟'][Math.floor(Math.random() * 4)];
                        confetti.style.fontSize = `${Math.random() * 15 + 15}px`;
                        confetti.style.left = `${Math.random() * 100}%`;
                        confetti.style.top = `-50px`;
                        confetti.style.color = ['var(--primary-color)', 'var(--accent-color)', 'var(--secondary-color)'][Math.floor(Math.random() * 3)];
                        
                        document.body.appendChild(confetti);
                        
                        setTimeout(() => {
                            confetti.remove();
                        }, 3500);
                    }, i * 50);
                }
            }
        });

        // Limit number of particles
            const maxParticles = 20;
            setInterval(() => {
                const particles = document.querySelectorAll('.cursor-particle, .heart-particle, .floating-heart');
                if (particles.length > maxParticles) {
                    for (let i = 0; i < particles.length - maxParticles; i++) {
                        particles[i].remove();
                    }
                }
            }, 1000);

            function createCursorTrail() {
            const particle = document.createElement('div');
            particle.className = 'cursor-particle';
            particle.style.left = `${mouseX - 6}px`;
            particle.style.top = `${mouseY - 6}px`;
            document.body.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 2000);
        }
        