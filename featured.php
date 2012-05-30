<?php $feat_query = new WP_Query(array( 'category_name' => 'featured' , 'posts_per_page' => 5 , 'post_type' => array('post' , 'gig')));
			
  	if ($feat_query->have_posts()) : ?>
  			
  		<section id="featured">
  		
  			<div id="feat-slider">
  			
  			<?php while ($feat_query->have_posts()) : $feat_query->the_post();?>
  				
    				<article id="post-<?php the_ID(); ?>" 
    				
    				<?php  $posttheme = get_post_meta($post->ID, 'featured_txt_color', true);?>
						
						<?php if ($posttheme === 'Light Text'):?>
						
						<?php post_class( 'white-text') ; ?>
						
						<?php else: ?>
						
						<?php post_class() ; ?>
						
						<?php endif; ?>
    				 
    				 role="article" <?php if ( get_post_meta($post->ID, 'featured_bg_image', true)):?> style="background-image : url('<?php echo get_post_meta($post->ID, 'featured_bg_image', true)?>')"<?php endif;?>>
						<div class="featured-holder">
						<div class="featured-content">
					<header class="entry-header">
		
						<h1 class="entry-title"><a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'themename' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark"><?php the_title(); ?></a></h1>
						
						<div class="media-container">
						
							<?php if ( get_post_meta($post->ID, 'media_embed_code', true)):
								
								$mediacode = get_post_meta($post->ID, 'media_embed_code', true);
					
  								if(stristr($mediacode, "http://player.soundcloud.com/player.swf?") == TRUE) : ?>
  
    									<?php 
  										$parampos = strpos($mediacode, '<embed');
  										$mediacodemod = substr_replace($mediacode, '<param name="wmode" value="opaque"></param> ', $parampos, 0);
  										echo $mediacodemod; 
  										?>
  								
  								<?php elseif(stristr($mediacode, "http://www.youtube.com/embed") == TRUE) : ?>
  						
  								
  										<?php 
  										$wmodepos = strpos($mediacode, '" frameborder=');
  										$mediacodemod = substr_replace($mediacode, '?wmode=opaque', $wmodepos, 0);
  										echo $mediacodemod;
  										?>
  								
  								<?php else:?>
  								
  									<?php echo $mediacode; ?>
  									
  								<?php endif; ?>
						
							<?php else : ?>
						
								<a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'themename' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark">
						
           							<?php the_post_thumbnail('medium');  ?>
		
								</a>
						
							<?php endif; ?>
						
						</div><!--.media-container-->

					</header><!-- .entry-header -->
					
						<div class="entry-summary">
						
						<?php if ( 'gig' == get_post_type() ) :
						
							$date = get_post_meta($post->ID, 'gig_date', true);
 							$date = date_create($date);
 							$date = date_format($date, 'D j F g:iA'); ?>
							
							<p>
							<!-- Gig -->
							
							<?php if ( get_post_meta($post->ID, 'venue', true) && get_post_meta($post->ID, 'venue_link', true) ) : ?>
						
        						<span class="venue">
        							<a href="<?php echo get_post_meta($post->ID, 'venue_link', true) ?>" title = 	" <?php echo get_post_meta($post->ID, 'venue', true) ?>"><?php echo get_post_meta($post->ID, 'venue', true) ?></a>
        						</span>
        					
        					<?php elseif ( get_post_meta($post->ID, 'venue', true) ): ?>
        					
        						<span class="venue">
        							<?php echo get_post_meta($post->ID, 'venue', true) ?>
        							</span>
        						
        					<?php endif; ?>
        						
        						<time class="gig-date"><?php echo $date ?></time>
						
					
							<?php if ( get_post_meta($post->ID, 'buy_tickets_text', true ) && get_post_meta($post->ID, 'buy_tickets_link', true )) : ?>
		
								<span class="more-info">
									<a href="<?php echo get_post_meta($post->ID, 'buy_tickets_link', true) ?>" title = "<?php echo $buy_tix_text ?>">
										<?php echo get_post_meta($post->ID, 'buy_tickets_text', true); ?>
									</a>
								</span>
							
							<?php elseif (get_post_meta($post->ID, 'buy_tickets_text', true)) : ?>
								
								<span class="more-info">
									<?php echo get_post_meta($post->ID, 'buy_tickets_text', true); ?>
								</span>
								
							<?php elseif (get_post_meta($post->ID, 'buy_tickets_link', true )) : ?>
							
								<span class="more-info">
									<a href="<?php echo get_post_meta($post->ID, 'buy_tickets_link', true) ?>" title = "Buy tickets">
										Buy tickets
									</a>
								</span>
							
							<? endif; ?>
						
						<?php else: ?>
						
							<?php the_excerpt(); ?>
						
						<?php endif; ?>
						
						</div><!-- .entry-summary -->
						
		
						<footer class="entry-btn">
					
						<?php if ( get_post_meta($post->ID, 'ct_link', true )) :?>
									
							<?php if ( get_post_meta($post->ID, 'ct_link_text', true )) :
											
								$ctlinktext = get_post_meta($post->ID, 'ct_link_text', true );
										
							else: 
								
								$ctlinktext = 'More Info';
									
							endif; ?>
									
        						<a href="
        						<?php echo get_post_meta($post->ID, 'ct_link', true ) ?>" title = "<?php echo $ctlinktext ?>">
        							<?php echo $ctlinktext ?>
        						</a>
        				
        				<?php endif; ?>
					
						</footer><!-- #entry-btn -->
					
						</div> <!-- .featured-holder -->
						</div> <!-- .featured-content -->
					</article>
    			
  				<?php endwhile; ?>
  				
  				</div><!--#feat-slider -->
  				
  				
  			</section><!-- #featured post -->
  				
  				
  				
  			<?php else: ?> 
  				
  			No posts DOUCHEBAG!!!!!
				
			<? endif; ?>
  				